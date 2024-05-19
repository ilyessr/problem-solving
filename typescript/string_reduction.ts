/*
# Have the function StringReduction(str) take the str parameter being passed 
# and return the smallest number you can get through the following reduction method. 
# The method is: Only the letters a, b, and c will be given in str and you must take two 
# different adjacent characters and replace it with the third. For example "ac" can be replaced with "b" 
# but "aa" cannot be replaced with anything. This method is done repeatedly 
# until the string cannot be further reduced, and the length of the resulting string is to be outputted.

# For example: if str is "cab", then "ca" can be reduced to "b" and you get "bb" (you can also reduce it to "cc"). 
# The reduction is done so the output should be 2. If str is "bcab", "bc" reduces to "a",
# so you have "aab", then "ab" reduces to "c", and the final string "ac" is reduced to "b" so the output should be 1.
*/

function stringReduction(str: string): number {
  const dict: { [key: string]: string } = {
    ab: "c",
    ba: "c",
    bc: "a",
    cb: "a",
    ca: "b",
    ac: "b",
  };

  let i = 0;

  while (i < str.length - 1) {
    const pair = str[i] + str[i + 1];

    if (dict[pair]) {
      str = str.slice(0, i) + dict[pair] + str.slice(i + 2);
      i = Math.max(i - 1, 0);
    } else {
      i++;
    }
  }

  return str.length;
}

// Tests
console.log(stringReduction("cab") === 2);
console.log(stringReduction("bcab") === 1);
console.log(stringReduction("abc") === 2);
console.log(stringReduction("cc") === 2);
