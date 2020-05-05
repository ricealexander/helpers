// accepts an array and a number of smaller arrays to return

function splitArray (array, count = 2) {
  const evenAmount = Math.floor(array.length / count)
  const remainder = array.length % count

  const result = []
  let sliceStart = 0

  for (let i = 1; i <= count; i += 1) {
    let sliceEnd = sliceStart + evenAmount
    if (i <= remainder) sliceEnd += 1

    result.push(array.slice(sliceStart, sliceEnd))
    sliceStart = sliceEnd
  }
  return result
}

module.exports = splitArray
