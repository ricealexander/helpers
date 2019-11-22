// Tidy DeepClone
// deep-clones an object but removes
// empty, null, and undefined keys
// deep-clone from:
// https://stackoverflow.com/questions/38416020/deep-copy-in-es6-using-the-spread-syntax#answer-53771927

const tidyDeepClone = obj => {
  if (typeof obj !== 'object' || obj === null) {
    return obj
  }

  if (obj instanceof Date) {
    return new Date(obj.getTime())
  }

  if (obj instanceof Array) {
    return obj.reduce((arr, item, i) => {
      arr[i] = tidyDeepClone(item)
      return arr
    }, [])
  }

  if (obj instanceof Object) {
    return Object.keys(obj).reduce((newObj, key) => {
      if (obj[key] === undefined || obj[key] === '' || obj[key] === null) return newObj
      newObj[key] = tidyDeepClone(obj[key])
      return newObj
    }, {})
  }
}

export default tidyDeepClone
