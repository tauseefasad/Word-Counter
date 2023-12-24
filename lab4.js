const form = document.getElementById('form');
const username = document.getElementById('username');
const address = document.getElementById('address');
const phone = document.getElementById('phone');
const email = document.getElementById('email');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const isValidPhone = phone => {
    const re = /^("(\\d{3})(\\d{3})(\\d+)", "($1) $2-$3")$/;
    return re.test(String(phone).to)
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const addressValue = address.value.trim();
    const phoneValue = phone.value.trim();
    const emailValue = email.value.trim();

    if(usernameValue === '') {
        setError(username, 'Name is required');
    } else {
        setSuccess(username);
    }

    if(addressValue === '') {
        setError(address, 'Address is required');
    } else {
        setSuccess(address);
    }


    if(phoneValue === '') {
        setError(phone, 'Phone Number is required');
    } else if (phoneValue.length < 10) {
        setError(phone, 'Phone Number must be numbers(1,2,3...)')
    } else {
        setSuccess(phone);
    }

    if(emailValue === '') {
        setError(email, 'Address is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid address');
    } else {
        setSuccess(email);
    }
}

function atLeastTwoCharacters(text) {
    const letters = text.match(/[a-z]/gi) || [];
  
    return letters.length >= 2;
  }
  
  function abscenceOfThreeConsecutiveCharacters(text) {
    for (const character of text) {
      const occurrences = Array.from(text).filter((v) => v == character).length;
  
      if (occurrences >= 3) {
        return false;
      }
    }
  
    return true;
  }
  
  const checks = [atLeastTwoCharacters, abscenceOfThreeConsecutiveCharacters];
  const textInput = document.querySelector(".text-input");
  const wordCountElement = document.querySelector(".word-count");
  const charCountElement = document.querySelector(".char-count");
  
  textInput.addEventListener("input", () => {
    const splitted = textInput.value.trim().split(/[\s-]/);
    const charCount = (textInput.value.match(/[a-z]/gi) || []).length;
    let wordCount = 0;
  
    outer: for (const text of splitted) {
      for (const check of checks) {
        if (!check(text)) {
          continue outer;
        }
      }
  
      wordCount++;
    }
  
    wordCountElement.textContent = wordCount;
    charCountElement.textContent = charCount;
  });
  