// const emailChecker = (str) => {
//     if(str.includes('@') == false){
//         console.log('email has to have @');
//     }
//     else if (str.includes('.com') == false) {
//         console.log("email must have '.com'");
//     }
//     else if (str.length<8) {
//         console.log("Password should have at least 8 characters")
//     }else {
//         console.log("password is succesfully set!");
//     }
    
// }


// const email = "joshua@dodo.com";

// emailChecker(email);

const form = document.getElementById('form');
const button = form.querySelector('button');

const checkEmail= (e) => {
    e.preventDefault();
    const email = e.target.querySelector('#email').value
    console.log(email);
}

form.addEventListener('submit', checkEmail);
 
