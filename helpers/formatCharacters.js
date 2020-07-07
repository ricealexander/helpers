/* eslint-disable unicorn/string-content */
import escapeRegexCharacters from './escapeRegexCharacters'

const specialCharacters = '`~!@#$%^&*()-_=+[{]}\\|;:\'",<.>/?'

function formatCharacters (string, options = {}) {
  const characters = options.characters || specialCharacters.split('')
  const className = options.className
    ? ` class="${options.className}"`
    : ''

  const patternString = characters
    .map(character => escapeRegexCharacters(character))
    .join('|')
  const pattern = new RegExp(`(${patternString})`, 'g')

  return string.replace(pattern, `<span${className}>$1</span>`)
}

export default formatCharacters
