const firstNonRepeatingChar = (str) => {
  // create a Map
  let freqMap = new Map();

  // Step 1: Count occurrences of each character

  for (char of str) {
    // freq[char] = (freq[char] || 0) + 1; (using object)
    freqMap.set(char, (freqMap.get(char) || 0) + 1);
  }
  // Step 2: Find the first character with count 1
  for(let char of str) {
    if(freqMap.get(char) === 1) {
        return char;  // ✅ Return first unique character
    }
  }
  return null;
};

console.log(firstNonRepeatingChar("aabbccdeffg"));

