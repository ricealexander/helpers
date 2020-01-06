// Tidy DeepClone
// deep-clones an object but removes
// empty, null, and undefined keys
// deep-clone from:
// https://stackoverflow.com/questions/38416020/deep-copy-in-es6-using-the-spread-syntax#answer-53771927

const valueIsValid = value => (
  value !== undefined &&
  value !== '' &&
  value !== null
)

const tidyDeepClone = object => {
  if (typeof object !== 'object' || object === null) {
    return object
  }

  if (object instanceof Date) {
    return new Date(object.getTime())
  }

  if (Array.isArray(object)) {
    return object.reduce((result, item, i) => {
      result[i] = tidyDeepClone(item)
      return result
    }, [])
  }

  // object is an instance of Object
  return Object.keys(object).reduce((result, key) => {
    if (!valueIsValid(object[key])) return result
    result[key] = tidyDeepClone(object[key])
    return result
  }, {})
}

export default tidyDeepClone
