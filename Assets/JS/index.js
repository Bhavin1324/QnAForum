import requireFieldValidator from './validation.js';
import { expressionValidator, loginEmail, loginPass, firstName, lastName, regEmail, regPass, dateOfBirth, sem, gradYear, forgetEmail, forgetPass, reForgetPass, login, signUp, changePass } from './validation.js';
import hamResponse from './utility.js';
hamResponse();
// debugger;
login.addEventListener('click', (e) => {
    e.preventDefault();
    const isEmptyLogin = requireFieldValidator(loginEmail,loginPass);
    const logE = expressionValidator(loginEmail,"email");
    const logP = expressionValidator(loginPass,"password");
    if(isEmptyLogin == 0 && logE == true && logP == true){
        // alert('form has been submitted');
        location.replace('../Pages/Desk.html');
    }
    
})
signUp.addEventListener('click', (e) => {
    e.preventDefault();
    const isEmptyReg = requireFieldValidator(firstName, lastName, regEmail, regPass, dateOfBirth, sem, gradYear);   
    const regE = expressionValidator(regEmail, "email"); 
    const regP = expressionValidator(regPass, "password");
    const fn = expressionValidator(firstName, "name");
    const ln = expressionValidator(lastName, "name");
    if(isEmptyReg == 0 && regE == true && regP == true && fn == true  && ln == true){
        // alert('form has been submitted');
    }
    
})
changePass.addEventListener('click', (e) => {
    e.preventDefault();
    const isEmptyReg = requireFieldValidator(forgetEmail,forgetPass,reForgetPass);   
    if(isEmptyReg == 0 && expressionValidator(forgetEmail,"email") && expressionValidator(forgetPass,"password") && expressionValidator(reForgetPass, "password")){
        // alert('form has been submitted');
    }
    
})