/*
Problem : Designer PDF Viewer
----------------------------------------------------------------------------------------------------------
When a contiguous block of text is selected in a PDF viewer, the selection is highlighted with a blue rectangle. 
In this PDF viewer, each word is highlighted independently. 

There is a list of 26 character heights aligned by index to their letters. For example, 'a' is at index 0  and 'z' is at index 25. 
There will also be a string. Using the letter heights given, determine the area of the rectangle highlight in mm2 assuming all letters are 1mm wide.

 See more : https://www.hackerrank.com/challenges/designer-pdf-viewer/problem
 */

/**
 * Calculates the area of the rectangle highlighted in a PDF viewer when a word is selected.
 * @param h - An array representing the heights of characters ('a' to 'z').
 * @param word - The selected word in the PDF viewer.
 * @returns The area of the highlighted rectangle.
 */
function designerPdfViewer(h: number[], word: string): number {
  // Find the maximum height of the letters in the word
  let wordLength = word.length;
  let maxHeight = 0;

  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    // Find the height of the letter
    const index = letter.charCodeAt(0) - "a".charCodeAt(0);
    maxHeight = Math.max(maxHeight, h[index]);
  }

  return wordLength * maxHeight;
}

const charHeights1 = [
  1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7,
];
const word1 = "zaba";
const expectedResult1 = 28; // Calculated manually: (4 * 7) = 28

console.log(designerPdfViewer(charHeights1, word1) === expectedResult1);

const charHeights2 = [
  1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
];
const word2 = "abc";
const expectedResult2 = 9; // Calculated manually: (3 * 3) = 9

console.log(designerPdfViewer(charHeights2, word2) === expectedResult2); // Expected output: true
