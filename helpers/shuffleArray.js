// Modern Fisher-Yates sort
// https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array#answer-6274381

import getRandomNumberInclusive from './getRandomNumberInclusive'

function shuffleArray (_array) {
  const array = [..._array]
  const finalIndex = array.length - 1

  for (let index = finalIndex; index > 0; index -= 1) {
    const randomIndex = getRandomNumberInclusive(0, index);
    // use array destructuring to swap variables
    [array[index], array[randomIndex]] = [array[randomIndex], array[index]]
  }
  return array
}

export default shuffleArray
