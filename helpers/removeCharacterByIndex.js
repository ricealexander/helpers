const removeCharacterByIndex = (string, index) => {
  const letters = [...string]
  letters.splice(index, 1)
  return letters.join('')
}

return removeCharacterByIndex
