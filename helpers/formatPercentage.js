const formatPercentage = (decimal, places = 2) => {
  if (typeof decimal !== 'number') return decimal
  const roundedDecimal = Math.round(decimal * (10 ** places)) / (10 ** places)
  return `${roundedDecimal * 100}%`
}

export default formatPercentage
