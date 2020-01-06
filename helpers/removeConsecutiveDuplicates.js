function removeConsecutiveDuplicates (dirtyArray) {
  return [...dirtyArray].filter((item, index, array) => {
    // last item is never a duplicate
    if (index === array.length - 1) return item
    // is duplicate if the next item is the same as current
    return item !== array[index + 1]
  })
}

export default removeConsecutiveDuplicates
