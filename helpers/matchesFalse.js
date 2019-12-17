// determine whether a value is a representation of false
// created for handling sloppy CSV data, but is not limited to that use case
// accepts only: false, 0, 'n', 'no', 'f', 'false', '0'

function matchesFalse(value) {
  if (typeof value === 'boolean') {
    return value === false
  }

  if (typeof value === 'number') {
    return value === 0
  }

  if (typeof value === 'string') {
    const string = value.toLowerCase()
    return (
      string === 'n' ||
      string === 'no' ||
      string === 'f' ||
      string === 'false' ||
      string === '0'
    )
  }
  return false
}

export default matchesFalse
