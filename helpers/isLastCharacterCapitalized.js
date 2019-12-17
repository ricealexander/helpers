function isLastCharacterCapitalized (string) {
  const lastCharacter = string.slice(-1)
  return string && (lastCharacter === lastCharacter.toUpperCase())
}

export default isLastCharacterCapitalized
