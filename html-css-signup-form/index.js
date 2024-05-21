document.addEventListener('DOMContentLoaded', function () {
  // here we are using the DOMContentLoaded event to ensure that the JavaScript code runs only after the DOM content has been fully loaded
  const password = document.querySelector('#Password')
  const confirmPassword = document.querySelector('#Confirm_password')
  // here we are selecting the password and confirm password input fields using the querySelector method

  // here we will check if the password and confirm password fields match, if they do we will remove the red border, if they don't we will add a red border
  function validatePasswords() {
    if (password.value !== confirmPassword.value) {
      password.style.border = '1px solid red'
      confirmPassword.style.border = '1px solid red'
    } else {
      password.style.border = '1px solid #E5E7EB'
      confirmPassword.style.border = '1px solid #E5E7EB'
    }
  }
  // this event listener will call the validatePasswords function when the password field loses focus. blur is an event that occurs when an element loses focus
  password.addEventListener('blur', validatePasswords)
  confirmPassword.addEventListener('blur', validatePasswords)
})
// we made it all an event listener so that the code runs only after the DOM content has been fully loaded, ensuring all elements are accessible and the code runs only after the DOM content has been fully loaded
// in conclusion, we have created a function called validatePasswords that checks if the password and confirm password fields match, if they do we will remove the red border, if they don't we will add a red border. We then added event listeners to the password and confirm password fields to call the validatePasswords function when the fields lose focus.
//.querySelector is a method that returns the first element that matches a specified CSS selector(s) in the document. If no matches are found, null is returned. we use this here instead of getElementById because it is more flexible and can be used to select elements using any CSS selector, not just the id attribute. so in our case its looking for the id of password and confirm password
/* 


    wrapped your JavaScript code inside document.addEventListener('DOMContentLoaded', function () { ... }). This ensures that your JavaScript code runs only after the DOM content has been fully loaded, ensuring all elements are accessible.

    I created a function called validatePasswords() to encapsulate the logic for validating passwords. This function is then called both when the password and confirm password inputs lose focus.

    I modified the style assignment to directly set the style.border property, which is a cleaner approach.
*/
