function resolveIndex (value, total) {
  if (typeof value !== 'number') {
    throw new TypeError(`First Argument must be a number. Instead got ${typeof value}`)
  }
  if (typeof total !== 'number') {
    throw new TypeError(`Second Argument must be a number. Instead got ${typeof total}`)
  }
  if (total < 1) {
    throw new RangeError(`Second Argument must be greater than 0. Instead got ${total}`)
  }

  // if index is too large, cycle right as many times as we are too large
  if (value >= total) {
    const moveCount = value % total
    return moveCount
  }

  // if index is too small, cycle left as many times as we are too small
  if (value < 0) {
    const moveCount = Math.abs(value) % total
    return total - moveCount
  }

  // value is within range
  return value
}

export default resolveIndex
