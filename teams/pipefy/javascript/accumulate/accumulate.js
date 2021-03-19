export const accumulate = (numbers, accumulator) => {
  // Best and easiest solution
  // return numbers.map(accumulator);

  // Solution without using map
  const accumulated = [];
  for (let i = 0; i < numbers.length; i++) {
    accumulated.push(accumulator(numbers[i]));
  }
  return accumulated;
};
