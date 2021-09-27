/* eslint-disable unicorn/prefer-number-properties */

function convertBase (to, from = 10) {
  return number => Number(parseInt(number, from).toString(to))
}

// usage:
// const toBinary = convertBase(2)
// toBinary(5)  // 101

export default convertBase
