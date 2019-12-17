function formatDate (string) {
  const date = new Date(string)
  if (Number.isNaN(date)) return string

  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default formatDate
