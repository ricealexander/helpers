const simplifyString = string => {
  if (typeof string !== 'string') {
    throw new TypeError(
      `Argument must be of type string. Instead got ${typeof string}`
    )
  }
  // \W matches all characters except A-Za-z0-9_
  // we want to also exclude the _ character
  return string
    .toLowerCase()
    .replace(/[^a-z]+/g, '')
}

export default simplifyString
