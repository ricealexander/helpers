// handleBounds
///  when given a range, cap off values
///  at the edges of the range.

///  if a range is from 0 to 100
///  values smaller than 0 return 0
///  values larger than 100 return 100

const handleBounds = (value, maxValue, minValue = 0) => {
  const number = Number(value);
  const max = Number(maxValue);
  const min = Number(minValue);

  if (Number.isNaN(number)
   || Number.isNaN(max)
   || Number.isNaN(min)
  ) return NaN;

  if (number < min) return min;
  if (number > max) return max;
  return number;
};

export default handleBounds;