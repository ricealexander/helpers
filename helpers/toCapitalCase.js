function toCapitalCase (string) {
  if (!string) return string
  return string
    .split(/\s+/) // split on groups of whitespace
    .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')
}

export default toCapitalCase
