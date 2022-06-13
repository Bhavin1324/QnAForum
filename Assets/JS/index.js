import requireFieldValidator from './validation.js';
import { expressionValidator, userSwill, enrollUser, loginEmail, loginPass, firstName, lastName, regEmail, regPass, dateOfBirth, sem, gradYear, forgetEmail, forgetPass, reForgetPass, login, signUp, changePass } from './validation.js';
import hamResponse from './utility.js';
hamResponse();
login.addEventListener('click', async (e) => {
    e.preventDefault();
    const isEmptyLogin = requireFieldValidator(loginEmail, loginPass);
    const logE = expressionValidator(loginEmail, "email");
    const logP = expressionValidator(loginPass, "password");
    const loginStatus = await userSwill(loginEmail, loginPass);
    if (isEmptyLogin == 0 && logE == true && logP == true && loginStatus == true) {
        location.replace('../Pages/Desk.html');
    }
})
signUp.addEventListener('click', async (e) => {
    e.preventDefault();
    const isEmptyReg = requireFieldValidator(firstName, lastName, regEmail, regPass, dateOfBirth, sem, gradYear);
    const regE = expressionValidator(regEmail, "email");
    const regP = expressionValidator(regPass, "password");
    const fn = expressionValidator(firstName, "name");
    const ln = expressionValidator(lastName, "name");
    if (isEmptyReg == 0 && regE == true && regP == true && fn == true && ln == true) {
        const enrollStatus = await enrollUser();
        if (enrollStatus == true) {
            alert('You are successfully registered');
            location.replace('/');
        }
    }

})
changePass.addEventListener('click', (e) => {
    e.preventDefault();
    const isEmptyReg = requireFieldValidator(forgetEmail, forgetPass, reForgetPass);
    const fm= expressionValidator(forgetEmail, "email");
    const fp = expressionValidator(forgetPass, "password");
    const refp = expressionValidator(reForgetPass, "password")
    if (isEmptyReg == 0 && fm == true && fp == true && refp == true) {
        if (forgetPass.value === reForgetPass.value) {
            console.log('Successfull change');
        }
        else {
            let span = document.createElement('span');
            span.textContent = `Passowrd should match`;
            span.style.color = 'red';
            span.style.margin = '0px 6px';
            span.style.fontSize = '16px';
            reForgetPass.style.borderColor = 'red';
            reForgetPass.classList.add('focus:ring-red-500');
            if (reForgetPass.parentElement.previousElementSibling.childElementCount == 0) {
                reForgetPass.parentElement.previousElementSibling.appendChild(span);
            }
        }
    }

})