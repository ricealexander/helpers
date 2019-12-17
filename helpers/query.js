import isElementType from './isElementType'

// query can be used as an alternative to querySelector and querySelectorAll
//   it accepts a string selector and an optional source to query from
//   if it finds multiple matches, it returns a NodeList
//   if it finds a single match, it returns an Element
//   it can instead accept a Node/NodeList which it returns as is
//     this allows it to "parse" an Element-based or string input

const query = (selector, source = document) => {
  // If selector is already a Node/NodeList, our job is done
  if (isElementType(selector)) return selector

  // Otherwise, validate our arguments
  if (typeof selector !== 'string') {
    throw new TypeError(`First argument must be a string. Instead got ${typeof selector}`)
  }
  if (!isElementType(source)) {
    throw new TypeError(`Second argument must be a Node/NodeList. Instead got ${source}`)
  }

  const nodes = source.querySelectorAll(selector)
  return (nodes.length > 1) ? nodes : nodes[0]
}

export default query
