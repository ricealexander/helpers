import { handleBounds } from './lib';

const limit = 10;
const dynamicValue = 5;

console.log({
  smaller: handleBounds(-1, limit),
  larger: handleBounds(15, limit),
  insideRange: handleBounds(dynamicValue, limit),
  addition: handleBounds(dynamicValue + 6, limit),
  subtraction: handleBounds(dynamicValue - 6, limit),
});
