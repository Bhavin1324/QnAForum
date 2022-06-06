import requireFieldValidator from './validation.js';
import { leftNavActive } from "./utility.js";
leftNavActive();
//  DOM elements 
let questionTitle = document.querySelector('#ques');
let questionBody = document.querySelector('#ques-body');
let postVisiblity = document.querySelector('#post-visiblity');
let postQuestionButton = document.querySelector('#post-question');

function utilWork() {
    let search = document.querySelector('.collapse-search');
    let content = document.querySelector('.collapse-content');
    search.onclick = () => {
        content.classList.toggle('hidden');
        content.classList.toggle('flex');
    }
    let commentBox = document.querySelectorAll('.comment-box');
    let commentCollapse = document.querySelectorAll('.collapse-comment');
    commentCollapse.forEach(comCol => {
        comCol.addEventListener('click', () => {
            let content = comCol.parentElement.parentElement.nextElementSibling.firstElementChild;
            comCol.classList.toggle('rotate-180');
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        })
    })
}
let logoutRef = document.querySelector('#logout');
let nameLabel = document.querySelector('#UserBadge');
nameLabel.textContent = sessionStorage.getItem('name');
logoutRef.addEventListener('click', () => {
    sessionStorage.clear();
})

// --- Getting user information ---//
async function getCurrentUser() {
    try {
        const curUserEmail = sessionStorage.getItem('email');
        const response = await fetch(`/api/v1/users/user/${curUserEmail}`);
        const { singleUser } = await response.json();
        delete singleUser.password;
        return singleUser;
    }
    catch (error) {
        alert(`Internal error ocuured`);
    }
}
async function getSpecificUser(id) {
    const response = await fetch(`/api/v1/users/${id}`);
    const { singleUserById } = await response.json();
    return singleUserById.name;
}
//--- Get request for fetching all  questions --- //
let feedExist = document.querySelector('.feed-exist');
let postContainer = document.querySelector('.post-content');
async function getQuesitons(callback) {
    try {
        const response = await fetch('/api/v1/questions');
        const { questions } = await response.json();
        // questions.forEach(q=>getSpecificUser(q.userID));
        // (questions.userID);
        if (questions.length < 1) {
            feedExist.textContent = `No feed found! :(`;
            return;
        }
        postContainer.innerHTML = "";
        questions.forEach(async (ques) => {
            const u = await getSpecificUser(ques.userID);
            postContainer.innerHTML += `<div class="postWrapper md:mx-4 mt-1 mb-2 border-[1px] rounded-lg px-4 py-2 shadow-md bg-slate-200">
            <div class="header px-2">
                <div class="dp flex gap-1 items-center">
                    <img src="../images/user.jpg" alt="" class="mt-2 h-[40px] w-[40px] rounded-full">
                    <div class="name-panel flex flex-col justify-center">
                        <div class="username mx-3 ${(ques.anonymous == true) ? 'block' : 'hidden'}">Anonymous</div>
                        <div class="username mx-3 ${(ques.anonymous == false) ? 'block' : 'hidden'}">${u}</div>
                    </div>
                    <div class="certified-q">
                        <i class="fa fa-circle-check text-[20px] text-[#0c4363] hover:text-[#1b8c94] pt-1"></i>
                    </div>
                </div>
            </div>
            <div class="main p-2 pt-2 lg:p-4">
                <div class="text-content">
                    <div class="q-title font-semibold text-lg pb-3 px-2">${ques.title}</div>
                    <div class="q-answer">${ques.description}</div>
                </div>
            </div>
            <div class="comment-tool flex justify-center items-center gap-4 mx-auto my-1">
                <textarea name="commentarea" id="comment-body"
                    class="form-inputBox resize-none transition-all duration-300 focus:h-[200px] my-0 h-[40px]"
                    placeholder="Write your thoughts..."></textarea>
                <div class="w-fit ml-auto"><button class="btn h-[35px]">Answer</button></div>
            </div>
            <div class="w-fit mx-auto">
                <button class="collapse-comment px-7 transition-all duration-200"><i
                        class="fa fa-angle-down text-[28px] text-[#0c4363] hover:text-[#1b8c94] "></i></button>
            </div>
        </div>
        <div class="comment-box relative bottom-3">
            <div
                class="comment-wrapper md:mx-4 border-[1px] px-7 rounded-b-lg shadow-md bg-slate-200 max-h-0 overflow-auto transition-all duration-200">
                <div class="py-4">
                    <div class="posted-Comment">
                        <div class="header px-2">
                            <div class="dp flex gap-1">
                                <img src="../images/user.jpg" alt="" class="mt-2 h-[40px] w-[40px] rounded-full">
                                <div class="name-panel flex flex-col justify-center">
                                    <div class="username mx-3">Jenny jacob</div>
                                </div>
                            </div>
                        </div>
                        <div class="main p-0 pt-2 lg:px-4 lg:pt-1 lg:pb-4">
                            <div class="text-content">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Blanditiis
                                doloru?
                            </div>
                        </div>
                        <div class="header px-2">
                            <div class="dp flex gap-1">
                                <img src="../images/user.jpg" alt="" class="mt-2 h-[40px] w-[40px] rounded-full">
                                <div class="name-panel flex flex-col justify-center">
                                    <div class="username mx-3">Ken Finge</div>
                                </div>
                            </div>
                        </div>
                        <div class="main p-0 pt-2 lg:px-4 lg:pt-1 lg:pb-4">
                            <div class="text-content">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Blanditiis
                                doloru?Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente saepe
                                pariatur omnis repellat asperiores. Quae vero placeat qui quos.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
            callback();
        })
    }
    catch (error) {
        feedExist.textContent = `Oops! Something went wrong :(`;
    }
}
const runRefresher = async () => {
    await getQuesitons(utilWork);
}
runRefresher();
// --- posting questions --- //
async function postQuestion() {
    try {
        const fieldEmpty = requireFieldValidator(questionTitle);
        if (fieldEmpty == 0) {
            const user = await getCurrentUser();
            const data = {
                title: questionTitle.value,
                description: questionBody.value,
                userID: user._id,
                anonymous: postVisiblity.value
            }
            const response = await fetch('/api/v1/questions', {
                method: 'POST',
                headers: { 'content-type': 'application/json;charset=utf-8' },
                body: JSON.stringify(data)
            });
            console.log(data);
            location.reload();
            history.go(-1);
            questionTitle.value = "";
            questionBody.value = "";
            postVisiblity.value = "false";
            runRefresher();
        }
    }
    catch (error) {
        alert('Unable to post questions. Something went wrong!');
    }

}
postQuestionButton.addEventListener('click', (e) => {
    e.preventDefault();
    postQuestion();
});
