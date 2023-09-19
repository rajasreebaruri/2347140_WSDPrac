document.addEventListener('DOMContentLoaded', () => {
    const NameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const commentInput = document.getElementById('comment');
    const submitButton = document.getElementById('submit-button');
    
    
    NameInput.addEventListener('input', () => {
        validateName();
        updateSubmitButtonState();
    });
    
    emailInput.addEventListener('input', () => {
        validateEmail();
        updateSubmitButtonState();
    });
    commentInput.addEventListener('input', () => {
        validateComment();
        updateSubmitButtonState();
    });
    document.getElementById('registration-form').addEventListener('submit', (e) => {
        if (!isFormValid()) {
            e.preventDefault();
        }
    });
    
    function validateName() {
        const NameError = document.getElementById('name-error');
        if (NameInput.value.length < 3 || !/^[a-zA-Z\s]*$/.test(NameInput.value)) {
            NameError.textContent = '❌ Full name must be at least 3 characters long and contain only letters and spaces.';
            NameInput.style.border = '2px solid red';

        } else {
            NameError.textContent = '✅';
            NameInput.style.border = '2px solid rgb(87, 212, 87)';
        }
    }
    
    function validateEmail() {
        const emailError = document.getElementById('email-error');
        if (!/\S+@\S+\.\S+/.test(emailInput.value)) {
            emailError.textContent = '❌ Enter a valid email address.';
            emailInput.style.border = '2px solid red';
        } else {
            emailError.textContent = '✅';
            emailInput.style.border = '2px solid rgb(87, 212, 87)'; // Change border color and width
        }
    }
    
    function validateComment() {
        const commentError = document.getElementById('comment-error');
        if (commentInput.value.trim() === '') {
            commentError.textContent = '❌ Please enter a comment.';
            commentInput.style.border = '2px solid red';
        } else {
            commentError.textContent = '✅';
            commentInput.style.border = '2px solid rgb(87, 212, 87)';
        }
    }

 
    function isFormValid() {
        return NameInput.validity.valid && emailInput.validity.valid && commentInput.validity.valid;
  }
  
  function updateSubmitButtonState(){
    if(isFormValid()){
        submitButton.removeAttribute("disabled");
    }
    else{
        submitButton.setAttribute("disabled","disabled");
    }
  }
});

  function success() {
    alert('Success');
  }

