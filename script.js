let signinbtn = document.getElementById("signinbtn");
let signupbtn = document.getElementById("signupbtn");
let namefield = document.getElementById("namefield");
let title = document.getElementById("title");

// function
signinbtn.onclick = function(){
    namefield.style.maxHeight = "0";
    title.innerHTML = "Sign in";
    signinbtn.classList.add("btn1");
    signupbtn.classList.remove("btn1");
}
signupbtn.onclick = function(){
    namefield.style.maxHeight = "60px";
    title.innerHTML = "Sign up";
    signupbtn.classList.add("btn1");
    signinbtn.classList.remove("btn1");
}