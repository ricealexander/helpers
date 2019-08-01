import { parseNode } from './lib';

const body = document.querySelector('body');

console.log({
  node: parseNode(body),
  selector: parseNode('body'),
  notASelector: parseNode(5),
});
