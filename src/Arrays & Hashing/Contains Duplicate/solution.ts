const containsDuplicate = (numbers: number[]) => {
  const cache: { [id: number]: number } = {};

  return numbers.some((number) => {
    if (number in cache) {
      return true;
    }

    cache[number] = number;
    return false;
  });
};

export { containsDuplicate };
