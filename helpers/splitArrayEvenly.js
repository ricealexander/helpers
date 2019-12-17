// accepts an array and a number of smaller arrays to return
// this is similar to lodash's chunk function

function splitArray(array, size = 1) {
  const chunkCount = Math.ceil(array.length / size)
  const result = []

  for (let index = 0; index < size; index += 1) {
    const start = index * chunkCount
    const end = (index + 1) * chunkCount
    result.push(array.slice(start, end))
  }
  return result
}

module.exports = splitArray
