'use strict';

const submitbtn = document.querySelector('.Submit-button');

let topic = localStorage.getItem('input1');
let numQuestion = localStorage.getItem('input2');
let maxMark = localStorage.getItem('input3');

submitbtn.addEventListener('click', async function () {
  // Display loading message in the anchor tag.
  submitbtn.textContent = 'Loading';

  try {
    const res = await axios.get(
      'https://quesio.onrender.com/generateQuestion',
      {
        params: {
          topic,
          maxMark,
          numQuestion,
        },
      }
    );
    console.log(res.data.data);

    localStorage.setItem('resData', JSON.stringify(res.data.data));
    console.log('In Handler');
  } catch (error) {
    console.error('Error:', error);
  } finally {
    window.location.href = 'ResultPage.html';
  }
});
