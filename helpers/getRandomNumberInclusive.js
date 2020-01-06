// https://www.geeksforgeeks.org/how-to-generate-random-number-in-given-range-using-javascript/
const getRandomNumberInclusive = (minValue, maxValue) => {
  const min = Math.ceil(minValue)
  const max = Math.floor(maxValue)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export default getRandomNumberInclusive
