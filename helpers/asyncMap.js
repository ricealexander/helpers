// asyncMap
// runs an array across an asynchronous callback
// from Wes Bos beginner-javascript

async function asyncMap (array, callback) {
  const results = []
  // eslint-disable-next-line no-restricted-syntax
  for (const item of array) {
    // eslint-disable-next-line no-await-in-loop
    results.push(await callback(item))
  }
  return results
}

export default asyncMap
