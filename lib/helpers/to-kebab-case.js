const toKebabCase = (string) => {
  if (typeof string !== 'string') return null;
  return string
    .toLowerCase()
    .replace(/[\s_]+/g, '-') // replace whitespace and '_' with '-'
    .replace(/[^\w-]/g, ''); // remove disallowed characters
};

export default toKebabCase;
