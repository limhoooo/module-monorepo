function updateAttributes(oldNode, newNode) {
  for (const { name, value } of [...newNode.attributes]) {
    if (value === oldNode.getAttribute(name)) continue;
    oldNode.setAttribute(name, value);
  }
  for (const { name } of [...oldNode.attributes]) {
    if (newNode.getAttribute(name) !== undefined) continue;
    oldNode.removeAttribute(name);
  }
}

// 요소 삭제,추가,이름변경 확인
export function updateElement(parent, newNode, oldNode) {
  // newNode 에 기존 노드가 삭제됐을시
  if (!newNode && oldNode) return oldNode.remove();
  // newNode 에 새로운 노드가 추가됐을시
  if (newNode && !oldNode) return parent.appendChild(newNode);
  // 텍스트일때 비교
  if (newNode instanceof Text && oldNode instanceof Text) {
    if (oldNode.nodeValue === newNode.nodeValue) return;
    oldNode.nodeValue = newNode.nodeValue;
    return;
  }

  // newNode 의 태그네임이 변경됐을시
  if (newNode.nodeName !== oldNode.nodeName) {
    // 현재탐색중인 노드의 인덱스
    const index = [...parent.childNodes].indexOf(oldNode);
    // 본인포함 하위까지 노드 삭제
    oldNode.remove();
    // parent에 기존 위치에 append
    parent.appendChild(newNode, index);
    return;
  }

  updateAttributes(oldNode, newNode);

  const newChildren = [...newNode.childNodes];
  const oldChildren = [...oldNode.childNodes];
  const maxLength = Math.max(newChildren.length, oldChildren.length);
  for (let i = 0; i < maxLength; i++) {
    updateElement(oldNode, newChildren[i], oldChildren[i]);
  }
}
