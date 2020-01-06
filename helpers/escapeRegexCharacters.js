const escapeRegexCharacters = string => (
  string.replace(/[$()*+-./?[\\\]^{|}]/g, '\\$&')
)

export default escapeRegexCharacters
