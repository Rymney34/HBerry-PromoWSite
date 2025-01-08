const name = document.querySelector(".name-inp");
const email = document.querySelector(".email-inp");
const message = document.querySelector(".message-inp");
const button = document.querySelector(".button1");


const validator = 0;
function sideValidation (name, email, message) {
    if (name == validator|| email == validator || message == validator ) {
        alert("Please fill all the fields");
    }
}

button.addEventListener('click', (e) => {
    sideValidation(name.value, email.value, message.value); 
   
})