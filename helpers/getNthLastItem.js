const getNthLastItem = (array, n = 1) => {
  if (!Array.isArray(array)) {
    throw new TypeError('First Argument must be an array')
  }
  if (typeof n !== 'number') {
    throw new TypeError(
      `Second Argument expected anumber, instead got ${typeof n}`
    )
  }
  if (n < 0) {
    throw new RangeError('Second Argument must be a positive number')
  }
  if (n > array.length) {
    throw new RangeError('Index must not be larger than the array')
  }

  return array[array.length - n]
}

export default getNthLastItem
