// create a function determining if a number is a multiple of provided factor.
// Example const isEven = isMultipleCurry(2)
// isEven(32)

const isMultipleCurry = factor => number => {
  if (typeof number !== 'number') {
    throw new TypeError(`Argument must be of type number. Instead got ${typeof number}`)
  }
  return number % factor === 0
}

export default isMultipleCurry
