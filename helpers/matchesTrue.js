// determine whether a value is a representation of true
// created for handling sloppy CSV data, but is not limited to that use case
// accepts only: true, 1, 'y', 'yes', 't', 'true', '1'

function matchesTrue (value) {
  if (typeof value === 'boolean') {
    return value === true
  }

  if (typeof value === 'number') {
    return value === 1
  }

  if (typeof value === 'string') {
    const string = value.toLowerCase()
    return (
      string === 'y' ||
      string === 'yes' ||
      string === 't' ||
      string === 'true' ||
      string === '1'
    )
  }
  return false
}

export default matchesTrue
