// Query shorthand
// shorthand for document.querySelector and document.querySelectorAll

// accepts a string selector and returns:
// - a NodeList if there are multiple matches
// - a Node if there is only one match
// - undefined if there are no matches

const query = selector => {
  const nodes = document.querySelectorAll(selector)
  return (nodes.length > 1) ? nodes : nodes[0]
}

export default query
