const loginForm = document.querySelector("#login_form");
const greetMsg = document.querySelector('#greeting_msg');
const clockMsg = document.querySelector('#clock');

const USERNAME_KEY = 'username';
const HIDDEN_CLASS = 'hidden';

//---> submit event를 통해 userName localStorage 에 저장
function onSubmit(event) {

    event.preventDefault();
    const enterUserName = loginForm.querySelector('#user_name');
    userName = enterUserName.value;

    localStorage.setItem(USERNAME_KEY, userName);

    loginForm.classList.add(HIDDEN_CLASS);
    printGreet();
}

loginForm.addEventListener("submit", onSubmit);

// submit event를 통해 userName localStorage 에 저장 <---

let userName = localStorage.getItem(USERNAME_KEY);
function printGreet() {

    greetMsg.innerText = `Hello ${userName}`;
    greetMsg.classList.remove(HIDDEN_CLASS);
    clockMsg.classList.remove(HIDDEN_CLASS);
}

if(userName === null) {
    loginForm.classList.remove(HIDDEN_CLASS);
} else {
   
    printGreet(); 
}