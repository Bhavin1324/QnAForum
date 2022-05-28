import requireFieldValidator,{expressionValidator} from './validation.js';
let signUp = document.getElementById('signup');
let firstName = document.getElementById('fname');
let lastName = document.getElementById('lname');
console.log(signUp, requireFieldValidator);
signUp.addEventListener('click',(e)=>{
    e.preventDefault();
    requireFieldValidator(firstName, lastName);
    expressionValidator(firstName,"name")
})