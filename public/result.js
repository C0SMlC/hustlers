'use strict';

const result = JSON.parse(localStorage.getItem('resData'));
const resultText = result.join('\n');
document.getElementById('ResultBox').value = resultText;
console.log(result);

document.getElementById('Copybtn').addEventListener('click', function () {
  // Get the text from the textarea
  let resultBox = document.getElementById('ResultBox');
  let textToCopy = resultBox.value;

  // Create a temporary textarea element to hold the text
  let tempTextarea = document.createElement('textarea');
  tempTextarea.value = textToCopy;

  // Append the temporary textarea to the document
  document.body.appendChild(tempTextarea);

  // Select the text in the temporary textarea
  tempTextarea.select();
  tempTextarea.setSelectionRange(0, 99999); // For mobile devices

  // Copy the selected text to the clipboard
  document.execCommand('copy');

  // Remove the temporary textarea from the document
  document.body.removeChild(tempTextarea);

  // Display a "Copied" message
  alert('Text copied to clipboard!');
});
