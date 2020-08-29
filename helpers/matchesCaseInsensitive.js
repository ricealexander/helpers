const matchesCaseInsensitive = (first, ...rest) => {
  if (rest.length === 0) {
    throw new Error('Expected at least 2 arguments')
  }

  const target = first.toLowerCase()
  return rest.every(value => value.toLowerCase() === target)
}

export default matchesCaseInsensitive
