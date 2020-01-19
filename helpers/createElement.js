/* eslint-disable no-param-reassign */

// createElement
// creates an element based on an emmet-like shorthand
// tag.class#id[attribute=value]{text content}

function createElement (_selector, innerHTML = '') {
  if (typeof _selector !== 'string') {
    throw new TypeError(`Argument must be a string. Instead got ${typeof _selector}.`)
  }

  const selector = _selector.trim()

  const startsWithLetter = /^[A-Za-z]/.test(selector)
  if (!startsWithLetter) {
    throw new Error('Argument must start with a letter.')
  }

  const segmentPattern = /(^[A-Za-z]|[#.[{])[^#.[{]+/g // delimeting characters are . # [
  const [tagName, ...attributes] = selector.match(segmentPattern)

  const longhand = attributes.reduce(
    (element, attribute) => {
      // handle class
      if (attribute.startsWith('.')) element.classList.add(attribute.slice(1))

      // handle id
      if (attribute.startsWith('#')) element.id = attribute.slice(1)

      // handle attribute
      if (attribute.startsWith('[')) {
        const attributeValuePattern = /\[([^=]+)="?([^"\]]+)"?]/
        const attributePattern = /\[([^=]+)]/

        if (attributeValuePattern.test(attribute)) { // matches [attribute="value"] or [attribute=value]
          const [_, attributeName, value] = attribute.match(attributeValuePattern)
          element.setAttribute(attributeName, value)
        }

        if (attributePattern.test(attribute)) { // matches [attribute]
          const [_, attributeName] = attribute.match(attributePattern)
          element.setAttribute(attributeName, '')
        }
      }

      // handle textContent
      if (attribute.startsWith('{')) {
        const [_, textContent] = attribute.match(/{([^}]+)}/) // matches {any content here}
        element.textContent += textContent
      }
      return element
    },
    document.createElement(tagName)
  )

  longhand.insertAdjacentHTML('beforeend', innerHTML)
  return longhand
}

export default createElement
