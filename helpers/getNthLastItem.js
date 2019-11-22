const getNthLastItem = (array, n = 1) => {
  if (typeof n !== 'number') throw new TypeError(`Expected number, instead got ${typeof n}`)
  if (n > array.length) throw new RangeError('Index cannot be larger than array')
  if (n < 0) throw new RangeError('Index must have a positive index')

  return array[array.length - n]
}

export default getNthLastItem
