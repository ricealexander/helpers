import randomNumberInclusive from './getRandomNumberInclusive'

const getRandomItems = (array, quantity = 1) => {
  const { length } = array

  if (quantity > length) {
    throw new RangeError(
      `quantity must be smaller than the array: ${quantity} !< ${length}`,
    )
  }
  const items = []
  const usedIndexes = []

  while (items.length < quantity) {
    const randomIndex = randomNumberInclusive(0, length - 1)

    // determine if an item was already added
    if (!usedIndexes.includes(randomIndex)) {
      items.push(array[randomIndex])
      usedIndexes.push(randomIndex)
    }
  }
  return items
}

export default getRandomItems
