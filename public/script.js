'use strict';

function storeValueAndNavigate(inputId) {
  let inputValue = document.getElementById(inputId).value;
  localStorage.setItem(inputId, inputValue);
}

