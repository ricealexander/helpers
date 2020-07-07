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

const propertyApplier = (element, property) => {
  // property is a class
  if (property.startsWith('.')) element.classList.add(property.slice(1))

  // property is an id
  if (property.startsWith('#')) element.id = property.slice(1)

  // property is an attribute
  if (property.startsWith('[')) {
    const attributeValuePattern = /\[([^=]+)="?([^"\]]+)"?]/ // matches [attribute="value"] or [attribute=value]
    const attributePattern = /\[([^=]+)]/ // matches [attribute]

    if (attributeValuePattern.test(property)) {
      const [_, attributeName, value] = property.match(attributeValuePattern)
      element.setAttribute(attributeName, value)
    }

    if (attributePattern.test(property)) {
      const [_, attributeName] = property.match(attributePattern)
      element.setAttribute(attributeName, '')
    }
  }

  // property is text content
  if (property.startsWith('{')) {
    const [_, textContent] = property.match(/{([^}]+)}/) // matches {any content here}
    element.textContent += textContent
  }

  return element
}

const startsWithLetter = string => /^[A-Za-z]/.test(string)

function createElement (_selector, properties = {}) {
  if (typeof _selector !== 'string') {
    throw new TypeError(`Argument must be a string. Instead got ${typeof _selector}.`)
  }

  const selector = _selector.trim()

  if (!startsWithLetter(selector)) {
    throw new Error('Argument must start with a letter.')
  }

  const segmentPattern = /(^[A-Za-z]|[#.[{])[^#.[{]+/g // delimeting characters are . # [ {
  const [tagName, ...attributes] = selector.match(segmentPattern)

  // create the element!
  const element = attributes.reduce(
    (element, attribute) => propertyApplier(element, attribute),
    document.createElement(tagName)
  )

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
