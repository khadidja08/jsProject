let loginlink=document.getElementById( "loginlink" );
let registerlink=document.getElementById( "registerlink" );
let loginformlink=document.getElementById( "loginformlink" );
let registerformlink=document.getElementById( "registerformlink" );
let loginForm=document.getElementById( "login" );
let registerForm=document.getElementById( "register" );

if (localStorage.getItem("processing")==="login"){
    login();
}

if (localStorage.getItem("processing")==="register"){
    register();
}

loginlink.addEventListener("click", function(){login()});  // When the login link is clicked, show
registerlink.addEventListener("click", function(){register()});   //the login form and

loginformlink.addEventListener("click", function(){login()});  // When the login link is clicked, show
registerformlink.addEventListener("click", function(){register()});   //the login form and


function login(){
    loginForm.style.left="4px"
    registerForm.style.right="-520px"
    loginlink.classList.add("active")
    registerlink.classList.remove("active")
    loginlink.style.borderBottom="1px solid #B89E4A"
    registerlink.style.borderBottom="none"
    localStorage.setItem("processing", "login")
}

function register(){
    registerForm.style.right="5px"
    loginForm.style.left="-510px"
    registerlink.classList.add("active")
    loginlink.classList.remove("active")
    registerlink.style.borderBottom="1px solid #B89E4A"
    loginlink.style.borderBottom="none"
    localStorage.setItem("processing", "register")
}

// Register Processing
let firstNameRegister = document.getElementById( "firstNameRegister" );
let lastNameRegister = document.getElementById("lastNameRegister");
let emailRegister=document.getElementById('emailRegister');
let passwordRegister = document.getElementById("passwordRegister");

let registerBtn = document.getElementById("sign-up");

registerBtn.addEventListener( 'click', function ( event) {
    event.preventDefault()
    if (firstNameRegister.value==="" || lastNameRegister.value==="" || emailRegister.value==="" || passwordRegister.value===""){
        alert("Please Fill Data.");
    
    }else {
        localStorage.setItem("firstName", firstNameRegister.value);
        localStorage.setItem("lastName", lastNameRegister.value);
        localStorage.setItem("email", emailRegister.value);
        localStorage.setItem("password", passwordRegister.value);
        setTimeout(() => {
            window.location = "loginregister.html"
        }, 1500)
        setTimeout( ()=>{
            login()
        },1500)
        
    } 
 });

//  Login Processing

let emailLogin=document.getElementById('emailLogin');
let passwordLogin = document.getElementById("passwordLogin");

let loginBtn = document.getElementById("sign-in");

let getFirstName = localStorage.getItem("firstName")
let getLastName = localStorage.getItem("lastName")
let getEmail = localStorage.getItem("email")
let getPassword = localStorage.getItem("password")


loginBtn.addEventListener( 'click', function ( event) {
    event.preventDefault()
    if (emailLogin.value==="" || passwordLogin.value===""){
        alert("Please Fill Data.");
    
    }else {
        if (getEmail && getEmail.trim()===emailLogin.value.trim() && getPassword && getPassword.trim() ===passwordLogin.value.trim()){
            setTimeout( ()=>{
                window.location="index.html"
            },1500)

        }else{
            alert("This account does not exist")
        }
        
        
        
    } 
 });

