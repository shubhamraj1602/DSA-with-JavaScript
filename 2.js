function firstUniqChar(s) {
  // Create a frequency map to count the occurrences of each character
  const freqMap = new Map();
  
  // Count the occurrences of each character
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    freqMap.set(char, (freqMap.get(char) || 0) + 1);
  }
  
  // Find the index of the first non-repeating character
  for (let i = 0; i < s.length; i++) {
    if (freqMap.get(s[i]) === 1) {
      return i;
    }
  }
  
  // If no non-repeating character found, return -1
  return -1;
}

// Example usage
const s = "leetcode";
const index = firstUniqChar(s);
console.log(index);
