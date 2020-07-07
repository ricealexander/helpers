// Query Each
// accepts a string selector and a callback function
// performs the callback on each element selected

const queryEach = (selector, callback) => {
  const nodes = document.querySelectorAll(selector)
  nodes.forEach((value, index, array) => {
    callback(value, index, array)
  })
}

export default queryEach
