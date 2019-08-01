import { formatTime as sampleFunction } from './lib';

const samples = [90, '12345', '10', '10000000000', 'abc'];
console.log(samples.map(sample => sampleFunction(sample)));
