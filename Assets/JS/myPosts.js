import requireFieldValidator from './validation.js';
import { leftNavActive } from "./utility.js";
import searchPosts from './desk.js';
import {getCurrentUser, utilWork, getAnsByQid, postAnswerUtil, postAnswer, postQuestion, questionTitle, questionBody, postVisiblity, postSearchInput} from './desk.js';
leftNavActive();

let feedExist = document.querySelector('.feed-exist');
let postContainer = document.querySelector('.post-content');


let logoutRef = document.querySelector('#logout');
let nameLabel = document.querySelector('#UserBadge');
nameLabel.textContent = sessionStorage.getItem('name');
logoutRef.addEventListener('click', () => {
    sessionStorage.clear();
})

searchPosts();