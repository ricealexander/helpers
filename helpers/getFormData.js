const getFormData = form => {
  const formElements = [...form.elements]

  const formData = formElements
    // only consider elements with both a 'name' and 'value' attribute
    .filter(element => element.name && element.value)
    // map to a 2d-array: [[name1, value1], [name2, value2], [name3, value3]]
    .map(({name, value}) => [name, value])

  return Object.fromEntries(formData)
}

export default getFormData
