import { round } from './lib';

const pi = 3.14159265359;
console.log([
  round(pi, 2),
  round(pi, '2'),
  round(pi),
  round('abc'),
]);
