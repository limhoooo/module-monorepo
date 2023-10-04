// element -> jsx
export function changeJsx(node) {
  if (node instanceof Text) return node.nodeValue;

  const jsx = {
    type: node.nodeName.toLowerCase(),
    props: {},
    children: [],
  };

  // JSX 속성 설정
  if (node.attributes.length > 0) {
    [...node.attributes].forEach(item => {
      jsx.props[item.nodeName] = convertAttributeValue(item.nodeValue);
    });
  } else {
    jsx.props = null;
  }

  // 자식 노드 처리
  if (node.childNodes.length > 0)
    jsx.children = [...node.childNodes].map(item => {
      return changeJsx(item);
    });

  return jsx;
}
// jsx -> element
export function createElement(node) {
  if (typeof node === 'string') {
    return document.createTextNode(node);
  }

  const $el = document.createElement(node.type);

  Object.entries(node.props || {})
    .filter(([attr, value]) => value)
    .forEach(([attr, value]) => $el.setAttribute(attr, value));

  node.children.map(createElement).forEach(child => $el.appendChild(child));
  return $el;
}

// 요소 삭제,추가,이름변경 확인
export function updateElement(parent, newNode, oldNode, index = 0) {
  // 텍스트일시
  if (createTextNode(parent, newNode, oldNode, index)) return;
  // 새로 추가되었을시
  if (addNode(parent, newNode, oldNode)) return;
  // 삭제 됐을시
  if (removeNode(parent, newNode, oldNode, index)) return;
  // 태그가 변경됐을시
  if (changeNode(parent, newNode, oldNode, index)) return;
  // 속성변경시
  updateAttributes(parent.childNodes[index], oldNode, newNode);
  // children Node 재귀
  recursionChildren(updateElement, parent, newNode, oldNode, index);
}

function createTextNode(parent, newNode, oldNode, index) {
  if (typeof newNode === 'string' && typeof oldNode === 'string') {
    if (newNode !== oldNode) {
      parent.replaceChild(
        document.createTextNode(newNode),
        parent.childNodes[index],
      );
    }
    return true;
  }
}
function addNode(parent, newNode, oldNode) {
  if (newNode && !oldNode) {
    parent.appendChild(createElement(newNode));
    return true;
  }
}
function removeNode(parent, newNode, oldNode, index) {
  if (!newNode && oldNode) {
    parent.removeChild(parent.childNodes[index]);
    return true;
  }
}
function changeNode(parent, newNode, oldNode, index) {
  if (newNode.type !== oldNode.type) {
    parent.replaceChild(createElement(newNode), parent.childNodes[index]);
    return true;
  }
}
function updateAttributes(parent, oldNode, newNode) {
  if (newNode.props) {
    for (const [name, value] of Object.entries(newNode.props)) {
      if (value === oldNode.props[name]) continue;
      parent.setAttribute(name, value);
      return;
    }
  }
  if (oldNode.props) {
    for (const [name] of Object.entries(oldNode.props)) {
      if (newNode.props[name] !== undefined) continue;
      parent.removeAttribute(name);
      return;
    }
  }
}
function recursionChildren(updateElement, parent, newNode, oldNode, index) {
  // key 를 갖고있는 상위 엘리먼트인지 확인
  const newLength = newNode.children.length;
  const oldLength = oldNode.children.length;
  const max = Math.max(newLength, oldLength);

  if (checkPropsKey(newNode)) {
    hasKeyRecursionChildren(
      updateElement,
      parent,
      newNode,
      oldNode,
      index,
      max,
    );
  } else {
    noneKeyRecursionChildren(
      updateElement,
      parent,
      newNode,
      oldNode,
      index,
      max,
    );
  }
}

function hasKeyRecursionChildren(
  updateElement,
  parent,
  newNode,
  oldNode,
  index,
  max,
) {
  const keyIndex = propsKeyIndexParse(newNode, oldNode);
  for (let i = max - 1; i >= 0; i--) {
    updateElement(
      parent.childNodes[index],
      newNode.children[keyIndex[i].indexA],
      oldNode.children[keyIndex[i].indexB],
      i,
    );
  }
}

function noneKeyRecursionChildren(
  updateElement,
  parent,
  newNode,
  oldNode,
  index,
  max,
) {
  for (let i = max - 1; i >= 0; i--) {
    updateElement(
      parent.childNodes[index],
      newNode.children[i],
      oldNode.children[i],
      i,
    );
  }
}

function checkPropsKey(newNode) {
  return newNode.children.some(child => child?.props?.key);
}

function propsKeyIndexParse(newNode, oldNode) {
  const a = newNode.children;
  const b = oldNode.children;
  let result = [];
  // a 배열의 key를 Set으로 변환
  const aKeys = new Set(a.map(item => item.props?.key));
  // b 배열을 순회하면서 결과 배열에 저장
  b.forEach((item, index) => {
    const key = item.props?.key;
    const indexA = aKeys.has(key)
      ? a.findIndex(aItem => aItem.props?.key === key)
      : null;
    const indexB = index;
    result = [...result, { key, indexA, indexB }];
  });
  // a에는 없는 key를 찾아 result에 추가
  a.forEach((item, index) => {
    const key = item.props?.key;
    if (!b.some(bItem => bItem.props?.key === key)) {
      const indexA = index;
      const indexB = null;
      result = [...result, { key, indexA, indexB }];
    }
  });
  return result;
}
function convertAttributeValue(value) {
  // 숫자로 변환 가능한 경우 숫자로 변환
  if (!isNaN(value)) {
    return Number(value);
  }
  // 불리언으로 변환 가능한 경우 불리언으로 변환
  if (value === 'true') {
    return true;
  }
  if (value === 'false') {
    return false;
  }
  // 그 외의 경우 문자열로 유지
  return value;
}
