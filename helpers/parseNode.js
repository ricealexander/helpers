import query from './query'

// Parse Node
// accepts a selector or Node/NodeList and attempts
// to evaluate this into a Node/NodeList
const parseNode = selector => {
  // If it is already a Node format, return as is
  // WARN: HTMLCollection is not a NodeList and cannot be
  // converted into one. This may cause errors
  if (
    selector instanceof Node ||
    selector instanceof NodeList ||
    selector instanceof HTMLCollection
  ) return selector

  // String is converted into a Node or NodeList
  if (typeof selector === 'string') {
    return query(selector)
  }

  return null
}

export default parseNode
