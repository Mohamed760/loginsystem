const signUpName = document.querySelector("#signUpName");
const signUpEmail = document.querySelector("#signUpEmail");
const signUpPass = document.querySelector("#signUpPass");
const signUpbtn = document.querySelector("#signUpbtn");
const emailExist = document.querySelector("#emailExist");

let users = [];

if(JSON.parse( localStorage.getItem("userInfo")) != null){
    users = JSON.parse(localStorage.getItem("userInfo"));
}

//SignUp
function signUp(){
    if(signUpName.value == "" || signUpEmail.value == "" || signUpPass.value == ""){
        emailExist.innerHTML = `<span class = "text-danger my-3">All Input Are Required</span>`
    }
    else{

        for(let i = 0; i < users.length; i++){
            if(users[i].email.toLowerCase() == signUpEmail.value.toLowerCase()){
                emailExist.innerHTML = `<span class = "text-danger my-3">Email Alreadt Exist</span>`
                return false
            }
        }

        getUsersData();
        emailExist.innerHTML = `<span class = "text-success my-3">Success</span>`
    }
}

//GetUsersData
function getUsersData(){
    let user = {
        name : signUpName.value,
        email : signUpEmail.value,
        pass : signUpPass.value
    }
    users.push(user);
    localStorage.setItem("userInfo",JSON.stringify(users))
    location.href = 'file:///C:/Users/LAPTOP%20WORLD/Desktop/Course/Week%2011%20LOGIN%20AND%20WEATHEARAPP/LoginAndSignup/index.html'
}


// event
signUpbtn?.addEventListener("click",function(){
    signUp();
})


//signIn
const signInEmail = document.querySelector("#signInEmail");
const signInPass = document.querySelector("#signInPass");
const checkinput = document.querySelector("#checkinput")
const logBtn = document.querySelector("#logBtn");


function signIn(){

    for(let i = 0; i < users.length; i++){
        if(signInEmail.value.toLowerCase() == users[i].email && signInPass.value == users[i].pass){
            checkinput.innerHTML = `<span class = "text-success my-3">Success</span>`
            localStorage.setItem("userName",JSON.stringify(users[i].name));
            location.href = 'file:///C:/Users/LAPTOP%20WORLD/Desktop/Course/Week%2011%20LOGIN%20AND%20WEATHEARAPP/LoginAndSignup/home.html'
            return
        }
    }


    if(signInEmail.value == "" || signInPass == ""){
        checkinput.innerHTML = `<span class = "text-danger my-3">All Input Are Required</span>`
    }

    else{
         checkinput.innerHTML = `<span class = "text-danger my-3">Incorrect Password</span>`
    }
}




logBtn?.addEventListener("click", function(){
    signIn();
})


// HomePage

const homeUser = document.querySelector("#homeUser");
let loggedUser = localStorage.getItem("userName");

if (homeUser !== null) {
  homeUser.innerHTML = `<h3 class="text-info">Welcome ${loggedUser}</h3>`;
}
