export function h(type, props, ...children) {
  return { type, props, children: children.flat() };
}
export function createElement(node) {
  if (typeof node === 'string') {
    return document.createTextNode(node);
  }

  const $el = document.createElement(node.type);

  Object.entries(node.props || {})
    .filter(([attr, value]) => value)
    .forEach(([attr, value]) => $el.setAttribute(attr, value));

  try {
    node.children.map(createElement).forEach(child => $el.appendChild(child));
  } catch (e) {
    console.log(node);
    console.error(e);
  }

  return $el;
}
