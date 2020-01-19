/* eslint-disable func-names */

// makeSafe (callback, errorHandler)
// used by asynchronous functions
// return a function with a provided errorHandler

const makeSafe = (callback, errorHandler) => (
  function () {
    callback().catch(errorHandler)
  }
)

export default makeSafe
