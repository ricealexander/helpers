// getElapsedTime({startDate:<Date> , endDate:<Date>})
// provide two dates and get their elapsed time in an object representation

function getElapsedTime (dates = {}) {
  const { startDate, endDate } = { startDate: new Date(), ...dates }
  const elapsedTime = Date.parse(endDate) - Date.parse(startDate)

  return {
    time: elapsedTime,
    seconds: Math.floor((elapsedTime / (1000)) % 60),
    minutes: Math.floor((elapsedTime / (1000 * 60)) % 60),
    hours:   Math.floor((elapsedTime / (1000 * 60 * 60)) % 24),
    days:    Math.floor((elapsedTime / (1000 * 60 * 60 * 24))),
  }
}

export default getElapsedTime
