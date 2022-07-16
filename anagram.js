// given two string. Write a funcion to determine if the string2 string is an anagram of string1.

function validAnagram(string1, string2) {
  if (string1.length !== string2.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < string1.length; i++) {
    let letter = string1[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  console.log(lookup);

  for (let i = 0; i < string2.length; i++) {
    let letter = string2[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}

// {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
validAnagram("anagrams", "nagaramm");
