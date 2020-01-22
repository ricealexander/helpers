// using fetch, request XML and return it in a usable format

const fetchXML = (path, options = {}) => (
  fetch(path, options)
    .then(response => response.text())
    .then(text => (new window.DOMParser()).parseFromString(text, 'text/xml'))
    .then(XML => [...XML.all])
)

export default fetchXML
