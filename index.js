import { toKebabCase } from './lib';

const samples = ['firstName lastName', 'nums123 and 45letters', '%&^@AASDF_--', 'control-group'];
console.log(samples.map(sample => toKebabCase(sample)));
