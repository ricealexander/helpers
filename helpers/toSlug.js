// toSlug takes a string and formats it as word characters delimited with underscores
// this would be similar to a toSnakeCase, except stricter
const toSlug = string => string
  .replace(/\s+/g, '_')
  .replace(/\W/, '')
  .toLowerCase()

export default toSlug
