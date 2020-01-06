// determine whether a number is a multiple of the provided factor.
// Example isMultipleOf(32, 2) returns true

const isMultipleOf = (number, factor) => {
  if (typeof number !== 'number') {
    throw new TypeError(`First Argument must be of type number. Instead got ${typeof number}`)
  }
  if (typeof factor !== 'number') {
    throw new TypeError(`First Argument must be of type number. Instead got ${typeof factor}`)
  }

  return number % factor === 0
}

export default isMultipleOf
