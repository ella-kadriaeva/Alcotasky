function stringLetters(str) {
  str = str.toLowerCase();
  const letters = {};

  for (let i = 0; i < str.length; i++) {
    const letter = str[i];
    if (letters[letter]) {
      letters[letter]++;
    } else {
      letters[letter] = 1;
    }
  }
  const keys = Object.keys(letters);
  for (let i = 0; i < keys.length; i++) {
    const letter = keys[i];
    console.log(`${letter} - ${letters[letter]}`);
  }
}
const str = "AbraCadabra";
stringLetters(str);
