// Query shorthand
// shorthand for document.querySelector and document.querySelectorAll

// accepts a string selector and returns:
// - a NodeList if there are multiple matches
// - a Node if there is only one match
// - undefined if there are no matches
const query = (selector) => {
  const nodes = document.querySelectorAll(selector);
  return (nodes.length > 1) ? nodes : nodes[0];
};

// Query Each
// accepts a string selector and a callback function
// performs the callback on each element selected
const queryEach = (selector, callback) => {
  const nodes = document.querySelectorAll(selector);
  if (!nodes.length) return;
  nodes.forEach(callback);
};

// Parse Node
// accepts a selector or Node/NodeList and attempts
// to evaluate this into a Node/NodeList
const parseNode = (selector) => {
  // If it is already a Node format, return as is
  // WARN: HTMLCollection is not a NodeList and cannot be
  // converted into one. This may cause errors
  if (selector instanceof Node
    || selector instanceof NodeList
    || selector instanceof HTMLCollection) return selector;

  // String is converted into a Node or NodeList
  if (typeof selector === 'string') {
    return query(selector);
  }

  return null;
};

export { parseNode, query, queryEach };
