// based on discusions on https://dev.to/nebrius/a-new-coding-style-for-switch-statements-in-javascript-typescript-ipe
const conditionalSwitch = choices => target => {
  const choice = choices[target] || choices.default
  if (choice == null) return
  // eslint-disable-next-line consistent-return
  return choice()
}

export default conditionalSwitch
