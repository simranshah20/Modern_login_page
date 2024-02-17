// Select the HTML element with the id "container" and assign it to the variable container
const container = document.getElementById('container');

// Select the HTML element with the id "register" and assign it to the variable registerBtn
const registerBtn = document.getElementById('register');

// Select the HTML element with the id "login" and assign it to the variable loginBtn
const loginBtn = document.getElementById('login');


// Add an event listener to the registerBtn element. When clicked, add the class "active" to the container element
registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

// Add an event listener to the loginBtn element. When clicked, remove the class "active" from the container element
loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});
