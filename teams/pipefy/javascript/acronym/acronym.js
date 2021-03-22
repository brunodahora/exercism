export const parse = (name) => {
  const words = name
    .toUpperCase()
    .replace(/[^A-Z0-9\']/g, " ")
    .split(" ");
  return words.reduce(
    (previousValue, currentValue) =>
      currentValue ? `${previousValue}${currentValue[0]}` : previousValue,
    ""
  );
};
