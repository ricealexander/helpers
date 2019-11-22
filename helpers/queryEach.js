// Query Each
// accepts a string selector and a callback function
// performs the callback on each element selected

const queryEach = (selector, callback) => {
  const nodes = document.querySelectorAll(selector)
  if (!nodes.length) return
  nodes.forEach(callback)
}

export default queryEach
