const isElementType = selector => (
  selector instanceof Node ||
  selector instanceof NodeList ||
  selector instanceof Element ||
  selector instanceof HTMLCollection
)

export default isElementType
