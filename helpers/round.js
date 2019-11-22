// Round
// pass a value and the number of places to round it to

const round = (_number, _places = 0) => {
  if (typeof _number !== 'number' && typeof _number !== 'string') {
    throw new TypeError(`argument number must be of type number or string. Instead got ${typeof _number}`)
  }
  if (typeof _places !== 'number' && typeof _places !== 'string') {
    throw new TypeError(`argument places must be of type number or string. Instead got ${typeof _places}`)
  }

  const number = Number(_number)
  const places = Number(_places)

  if (Number.isNaN(places)) {
    throw new Error(`argument places could not be resolved to a places. Instead got ${_places}`)
  }

  return (Number.isNaN(number))
    ? NaN
    : Math.round(number * (10 ** places)) / (10 ** places)
}

export default round
