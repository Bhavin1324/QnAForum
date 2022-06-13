import requireFieldValidator from './validation.js';
import { leftNavActive } from "./utility.js";
const firstName = document.querySelector('#fname');
const lastName = document.querySelector('#lname');
const profEmail = document.querySelector('#profEmail');
const gradYear = document.querySelector('#gradYear');
const sem = document.querySelector('#semester');

leftNavActive();
loadData();
let logoutRef = document.querySelector('#logout');
let nameLabel = document.querySelector('#UserBadge');
let updateBtn = document.querySelector('#updateProfile');

nameLabel.textContent = sessionStorage.getItem('name');
logoutRef.addEventListener('click', () => {
    sessionStorage.clear();
})

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
async function loadData() {

    let userData = await getCurrentUser();
    let name = userData.name;
    name = name.split(' ');
    let fname = name[0];
    let lname = name[1];
    firstName.value = fname;
    lastName.value = lname;
    profEmail.value = userData.email;
    gradYear.value = userData.graduationYear;
    sem.value = userData.semester;
}
updateBtn.addEventListener('click', async (e) => {
    // await updateProfile();  
    e.preventDefault();
    try {
        let user = await getCurrentUser();

        console.log(user)
        console.log(lname);
        let user_id = user._id;
        console.log(user_id);
        const updateData = {
            name: firstName.value.trim() + " " + lastName.value.trim(),
            email: profEmail.value.trim(),
            semester: sem.value,
            graduationYear: gradYear.value
        }
        let response = await fetch(`/api/v1/users/${user_id}`,
            {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(updateData)
            });
        
    } catch (error) {
        console.log(error);
    }
})



