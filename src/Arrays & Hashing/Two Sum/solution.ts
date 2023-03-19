const twoSum = (numbers: number[], target: number) => {
  const map = new Map<number, number>();
  const result: number[] = [];

  for (const [index, current] of numbers.entries()) {
    const number = target - current;
    const found = map.get(number);

    if (found !== undefined) {
      result.push(found, index);
      break;
    }

    map.set(current, index);
  }

  return result;
};

export { twoSum };
