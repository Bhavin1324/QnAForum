import requireFieldValidator from './validation.js';
import { leftNavActive } from "./utility.js";
import { firstName, lastName, regEmail, dateOfBirth, gradYear, sem } from './validation.js'
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
    regEmail.value = userData.email;
    gradYear.value = userData.graduationYear;
    sem.value = userData.semester;
}
updateBtn.addEventListener('click', async () => {
    // await updateProfile();  
    try {
        let user = await getCurrentUser();

        console.log(user)
        console.log(lname);
        let user_id = user._id;
        console.log(user_id);
        const updateData = {
            name: firstName.value.trim() + " " + lastName.value.trim(),
            email: regEmail.value.trim(),
            semester: sem.value,
            graduationYear: gradYear.value
        }
        let response = await fetch(`/api/v1/users/${user_id}`,
            {
                method: 'patch',
                headers: {
                    'content-type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(updateData)
            });
        // if (response.status == 200 {
        //     alert('Profile Updated Successfully');
        // }
    } catch (error) {
        console.log(error);
    }
})
// async function updateProfile() {

//     let user = await getCurrentUser();
//     let user_id = user._id;
//     console.log(user_id);
//     const updateData = {
//         name: firstName.value.trim() + " " + lastName.value.trim(),
//         email: regEmail.value.trim(),
//         semester: sem.value,
//         graduationYear: gradYear.value
//     }
//     let response = await fetch(`/api/v1/users/${user_id}`,
//         {
//             method: 'patch',
//             headers: { 'content-type': 'application/json;charset=utf-8' },
//             body: JSON.stringify(updateData)
//         });
//     if (response.status == 201) {
//         alert('Profile Updated Successfully');
//         // location.reload();
//     } else {
//         alert('error Updating Record');
//     }
// }


