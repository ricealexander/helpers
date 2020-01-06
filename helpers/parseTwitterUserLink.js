import makeStartWith from './makeStartWith'
import removeCharacters from './removeCharacters'

const parseTwitterUserLink = segment => {
  if (!segment || typeof segment !== 'string') return null

  // if we're given a URL
  if (
    segment.startsWith('https://twitter.com/') ||
    segment.startsWith('http://twitter.com/') ||
    segment.startsWith('//twitter.com/') ||
    segment.startsWith('twitter.com/')
  ) {
    const partial = segment.split('twitter.com/')[1]
    if (!partial || partial.includes('/')) return null

    const url = removeCharacters(`https://twitter.com/${partial}`, '@')
    const handle = makeStartWith(partial, '@')
    return `<a href="${url}">${handle}</a>`
  }

  // if we're given a tag
  // a tag starts with '@' and does not contain any '/' character
  if (segment.startsWith('@') && !segment.includes('/')) {
    const url = `https://twitter.com/${segment.slice(1)}`
    const handle = segment
    return `<a href="${url}">${handle}</a>`
  }

  // if we're given a partial
  // a partial does not contain any '/' character
  if (!segment.includes('/')) {
    const url = `https://twitter.com/${segment}`
    const handle = makeStartWith(segment, '@')
    return `<a href="${url}">${handle}</a>`
  }

  return null
}

export default parseTwitterUserLink
