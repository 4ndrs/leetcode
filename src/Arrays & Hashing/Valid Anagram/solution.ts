const isAnagram = (word: string, anagram: string) => {
  if (word.length !== anagram.length) {
    return false;
  }

  if (word === anagram) {
    return true;
  }

  const wordCache = generateCache(word);
  const anagramCache = generateCache(anagram);

  return Object.entries(wordCache).every(
    ([letter, count]) =>
      letter in anagramCache && anagramCache[letter] === count
  );
};

const generateCache = (word: string) => {
  const cache: { [id: string]: number } = {};

  [...word].forEach((letter) => {
    if (letter in cache) {
      cache[letter] += 1;
      return;
    }

    cache[letter] = 1;
  });

  return cache;
};

export { isAnagram };
