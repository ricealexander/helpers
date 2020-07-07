const toSentenceCase = string => (
  string
    .split(/[_-]/)
    .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')
)

export default toSentenceCase
