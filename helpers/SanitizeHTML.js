// Elijah Manor https://www.youtube.com/watch?v=OLdWCmcTNok {30:48}
// Use with tagged template literals

const sanitizeHTMLCharacters = string => string
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')

function SanitizeHTML (literals, ...values) {
  let string = ''

  values.forEach((value, i) => {
    string += literals[i]
    string += sanitizeHTMLCharacters(String(value))
  })
  string += literals[literals.length - 1]

  return string
}

export default SanitizeHTML
