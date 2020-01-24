/* eslint-disable max-len */
/* eslint-disable no-param-reassign */

// createElement
// a utility to simplify creating an element and adding properties to it.
// it offers two formats, which can be combined,
//   1. An selector-based shorthand: tag.class#id[attribute=value]{text content}
//   2. A properties object

// properties object is useful for properties such as .innerHTML,
// which are not supported with the selector shorthand,
// and for use cases where an element's property is dynamic.

/*
  // without createElement
  const button = document.createElement('button')
  button.id = "subscribe"
  button.className = "btn btn-danger"
  button.setAttribute("aria-describedby", "why-to-subscribe")
  button.innerText = "Subscribe"

  // using selector-based shorthand
  const button = createElement(
    'button#subscribe.btn.btn-danger[aria-describedby="why-to-subscribe"]{Subscribe}'
  )

  // using properties object
  const button = createElement('button', {
    id: "subscribe",
    className: "btn btn-danger",
    "aria-describedby": "why-to-subscribe",
    innerText: "Subscribe"
  })

  // these formats can be mixed together
  const button = createElement('button.btn.btn-danger{Subscribe}', {
    id: "subscribe",
    "aria-describedby": "why-to-subscribe"
  })
*/

function createElement (_selector, properties = {}) {
  if (typeof _selector !== 'string') {
    throw new TypeError(`Argument must be a string. Instead got ${typeof _selector}.`)
  }

  const selector = _selector.trim()

  const startsWithLetter = /^[A-Za-z]/.test(selector)
  if (!startsWithLetter) {
    throw new Error('Argument must start with a letter.')
  }

  const segmentPattern = /(^[A-Za-z]|[#.[{])[^#.[{]+/g // delimeting characters are . # [ {
  const [tagName, ...attributes] = selector.match(segmentPattern)

  // create the element!
  const element = document.createElement(tagName)

  // add properties from the selector
  attributes.forEach(attribute => {
    // handle class
    if (attribute.startsWith('.')) element.classList.add(attribute.slice(1))

    // handle id
    if (attribute.startsWith('#')) element.id = attribute.slice(1)

    // handle attribute
    if (attribute.startsWith('[')) {
      const attributeValuePattern = /\[([^=]+)="?([^"\]]+)"?]/
      const attributePattern = /\[([^=]+)]/

      // matches [attribute="value"] or [attribute=value]
      if (attributeValuePattern.test(attribute)) {
        // eslint-disable-next-line max-len
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
  })

  // add properties from the properties object
  Object.entries(properties).forEach(([property, value]) => {
    // if the property is not recognized by element,
    // we must treat it as an attribute
    const isNativeProperty = (property in element)

    if (isNativeProperty) element[property] = value
    else element.setAttribute(property, value)
  })

  return element
}

export default createElement
