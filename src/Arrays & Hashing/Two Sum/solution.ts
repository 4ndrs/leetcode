const twoSum = (numbers: number[], target: number) => {
  for (let outer = 0; outer < numbers.length; outer++) {
    for (let inner = outer + 1; inner < numbers.length; inner++) {
      if (numbers[outer] + numbers[inner] === target) {
        return [outer, inner];
      }
    }
  }
};

export { twoSum };
