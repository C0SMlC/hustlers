'use strict';

const submitbtn = document.querySelector('.Submit-button');

let topic = localStorage.getItem('input1');
let numQuestion = localStorage.getItem('input2');
let maxMark = localStorage.getItem('input3');

submitbtn.addEventListener('click', async function () {
  console.log(topic);
  console.log(numQuestion);
  console.log(maxMark);

  const res = await axios({
    method: 'GET',
    url: 'https://quesio.onrender.com/generateQuestion',
    data: {
      topic,
      maxMark,
      numQuestion,
    },
  });
  console.log('In Handler');
  console.log(res.data);
});
