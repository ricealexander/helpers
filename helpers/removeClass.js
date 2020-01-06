function removeClass (selector, className) {
  document.querySelectorAll(selector).forEach(element => element.classList.remove(className))
}

export default removeClass
