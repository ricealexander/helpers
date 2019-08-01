import { toKebabCase } from './lib';

const samples = ['PascalCase', 'camelCase', 'snake_case', 'kebab-case', 'FirstName LastName', '--long-kebab--', ''];
console.log(samples.map(sample => toKebabCase(sample)));
