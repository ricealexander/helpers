// Round
// pass a value and the number of places to round it to

const round = (value, decimals = 0) => {
  const number = Number(value)
  const places = Number(decimals)
  if (Number.isNaN(number) || Number.isNaN(places)) return NaN

  return Math.round(number * (10 ** places)) / (10 ** places)
}

export default round
