let loginEmail = document.getElementById('logemail');
let loginPass = document.getElementById('logpass');
let firstName = document.getElementById('fname');
let lastName = document.getElementById('lname');
let regEmail = document.getElementById('regemail');
let regPass = document.getElementById('regpass');
let dateOfBirth = document.getElementById('dob');
let gradYear = document.getElementById('gradYear');
let sem = document.getElementById('semester');
let forgetEmail = document.getElementById('fpemail');
let forgetPass = document.getElementById('fppass');
let reForgetPass = document.getElementById('refppass');
let login = document.getElementById('login');
let signUp = document.getElementById('signup');
let changePass = document.getElementById('changePass');

/*
requireFieldValidator(elements,message) - follows the follwoing design structure
<elem>Label for input element<elem>
<elem><input type='' class=''></elem>

first class name should contain proper context field name
*/
export function expressionValidator(elem, fieldType) {
    let regEx;
    switch (fieldType) {
        case "name":
            regEx = /^([a-zA-Z]+){3,}$/g;
            if (!regEx.test(elem.value)) {
                let span = document.createElement('span');
                span.textContent = 'Invalid name';
                span.style.color = 'red';
                span.style.margin = '0px 6px';
                elem.style.borderColor = 'red';
                elem.classList.add('focus:ring-red-500');
                if (elem.parentElement.previousElementSibling.childElementCount == 0) {
                    elem.parentElement.previousElementSibling.appendChild(span);
                    return false;
                }
            }
            else {
                if (!elem.parentElement.previousElementSibling.childElementCount == 0) {
                    elem.parentElement.previousElementSibling.removeChild(elem.parentElement.previousElementSibling.childNodes[1]);
                }
                elem.style.borderColor = 'rgb(148,163,184)';
                elem.classList.remove('focus:ring-red-500');
                return true;
            }
        case "password":
            regEx = /^(?=.*\d)(?=.*[a-z]).{6,}$/;
            if (!regEx.test(elem.value)) {
                let span = document.createElement('span');
                span.textContent = 'Password should contain digits, characters and length >= 6';
                span.style.color = 'red';
                span.style.margin = '0px 6px';
                span.style.fontSize = '14px';
                elem.style.borderColor = 'red';
                elem.classList.add('focus:ring-red-500');
                if (elem.parentElement.previousElementSibling.childElementCount == 0) {
                    elem.parentElement.previousElementSibling.appendChild(span);
                    return false;
                }
            }
            else {
                if (!elem.parentElement.previousElementSibling.childElementCount == 0) {
                    elem.parentElement.previousElementSibling.removeChild(elem.parentElement.previousElementSibling.childNodes[1]);
                }
                elem.style.borderColor = 'rgb(148,163,184)';
                elem.classList.remove('focus:ring-red-500');
                return true;
            }
        case "email":
            regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (!regEx.test(elem.value)) {
                let span = document.createElement('span');
                span.textContent = 'Invalid email';
                span.style.color = 'red';
                span.style.margin = '0px 6px';
                elem.style.borderColor = 'red';
                elem.classList.add('focus:ring-red-500');
                if (elem.parentElement.previousElementSibling.childElementCount == 0) {
                    elem.parentElement.previousElementSibling.appendChild(span);
                    return false;
                }
            }
            else {
                if (!elem.parentElement.previousElementSibling.childElementCount == 0) {
                    elem.parentElement.previousElementSibling.removeChild(elem.parentElement.previousElementSibling.childNodes[1]);
                }
                elem.style.borderColor = 'rgb(148,163,184)';
                elem.classList.remove('focus:ring-red-500');
                return true;
            }
    }
}
export function requireFieldValidator(...args) {
    let ee = 0;
    args.forEach(element => {
        if (!element.value.trim() || (element.selectedIndex == 0)) {
            let elem = document.createElement('span');
            elem.style.color = 'red';
            elem.style.margin = '0px 6px';
            element.style.borderColor = 'red';
            element.classList.add('focus:ring-red-500');
            if (args[args.length - 1] == false) {
                elem.textContent = `This field is required`;
            }
            else {
                elem.textContent = `${element.classList[0]} is required`;
            }
            if (element.parentElement.previousElementSibling.childElementCount == 0) {
                element.parentElement.previousElementSibling.appendChild(elem);
            }
        }
        else {
            if (!element.parentElement.previousElementSibling.childElementCount == 0) {
                element.parentElement.previousElementSibling.removeChild(element.parentElement.previousElementSibling.childNodes[1]);
            }
            element.style.borderColor = 'rgb(148,163,184)';
            element.classList.remove('focus:ring-red-500');
        }
    });
    args.forEach(element => {
        if (!element.parentElement.previousElementSibling.childElementCount == 0) {
            ee++;
        }
    });
    return ee;
}


