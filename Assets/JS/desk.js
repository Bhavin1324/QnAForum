import { leftNavActive } from "./utility.js";
leftNavActive();
let logoutRef = document.querySelector('#logout');
let nameLabel = document.querySelector('#UserBadge'); 
nameLabel.textContent = sessionStorage.getItem('name');
logoutRef.addEventListener('click',()=>{
    sessionStorage.clear();
})