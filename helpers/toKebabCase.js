const toKebabCase = string => {
  if (typeof string !== 'string') return null

  // replace whitespace and '_' with '-'
  // add '-' between words (camelCase)
  // remove disallowed characters
  // trim any stray '-' from the sides
  return string
    .replace(/[\s_]+/g, '-')
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[^\w-]/g, '')
    .replace(/^-+|-+$/g, '')
    .toLowerCase()
}

export default toKebabCase
