import requireFieldValidator from './validation.js';
import { leftNavActive } from "./utility.js";
leftNavActive();

let createClass = document.querySelector('#create-class');
let joinClass = document.querySelector('#join-class');
let classCodeBox = document.querySelector('#classCodeBox');
let createClasstxt = document.querySelector('#createClasstxt');


createClass.addEventListener('click', () => {

    const code = Math.floor(100000 + Math.random() * 900000);
    if (classCodeBox.className.includes('hidden')) {
        classCodeBox.classList.remove('hidden');
    } else {
        classCodeBox.classList.add('hidden');

    }
})
joinClass.addEventListener('click', (e) => {
    e.preventDefault();
    if (joinClasstxt.className.includes('hidden')) {

        joinClasstxt.classList.remove('hidden');
    } else {
        joinClasstxt.classList.add('hidden');

    }

})