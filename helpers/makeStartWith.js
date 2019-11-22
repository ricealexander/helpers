// determine if a string starts with the specified starter
// if the string does not, add the starter

// makeStartWith('handle', '@') --> '@handle'
// makeStartWith('@handle', '@') --> '@handle'

const makeStartWith = (string, starter) => {
  if (!string || !starter) return string

  if (string.startsWith(starter)) return string
  return `${starter}${string}`
}

export default makeStartWith
