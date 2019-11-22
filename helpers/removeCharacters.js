// removes all occurences of a character from a string


const removeCharacters = (string, characters) => {
  if (!string || !characters) return string

  const regex = new RegExp(`[${characters}]`, 'g')
  return string.replace(regex, '')
}

export default removeCharacters
