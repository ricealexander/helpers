const voidElements = ['area', 'base', 'br', 'col', 'command', 'embed', 'hr', 'img', 'input', 'keygen', 'link', 'meta', 'param', 'source', 'track', 'wbr']

const HTMLPatterns = [
  { // <{word}{optional content}>{optional whitespace}{text}{optional whitespace}<\{same word}>
    description: 'Match an element with a matching closing tag',
    pattern: /<([\dA-Za-z]+)([^>]+)?>(\s+)?([\S\s]*?)(\s+)?<\/\1>/,
    replaceWith: '$4',
  },
  { // <br{optional content}>
    description: 'Match br element',
    pattern: /<[Bb][Rr]([^>]+)?>/,
    replaceWith: '\n',
  },
  { // <{word}{optional content}>
    description: 'Match a void element',
    pattern: new RegExp(`<(${voidElements.join('|')})([^>]+)?>`, 'i'),
    replaceWith: '',
  },
]

function stripHTML (string) {
  let testString = string

  HTMLPatterns.forEach(({ pattern, replaceWith }) => {
    while (pattern.test(testString)) {
      testString = testString.replace(pattern, replaceWith)
    }
  })

  return testString
}

export default stripHTML
