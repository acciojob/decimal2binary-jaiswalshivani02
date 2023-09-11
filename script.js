function decimalToBinary(decimalNumber) {
  // Use toString(2) to convert to binary
  return decimalNumber.toString(2);
}

// Test cases
console.log(decimalToBinary(7));  // Output: "111"
console.log(decimalToBinary(10)); // Output: "1010"
console.log(decimalToBinary(33)); // Output: "100001"
