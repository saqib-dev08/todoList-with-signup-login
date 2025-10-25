var namediv = document.getElementById("name");
var nameError = document.createElement("p");
nameError.textContent = "Name is required!"
namediv.appendChild(nameError);

var dobdiv = document.getElementById("dob");
var dobError = document.createElement("p");
dobError.textContent = "Date of birth is required!"
dobdiv.appendChild(dobError);

var cnicdiv = document.getElementById("cnic");
var cnicError = document.createElement("p");
cnicError.textContent = "CNIC is required!"
cnicdiv.appendChild(cnicError);

var passdiv = document.getElementById("pass");
var passError = document.createElement("p");
passError.textContent = "Password is required!"
passdiv.appendChild(passError);



const userName = document.getElementById("user-name");

const dob = document.getElementById("user-dob");

const cnic = document.getElementById("user-cnic");

const password = document.getElementById("user-pass");


const paras = document.getElementsByTagName("p");
console.log(paras)


var loginPage = document.getElementById("login-content");
var signupPage = document.getElementById("signup-content");


function submitbtn(event) {
    event.preventDefault();

    console.log(userName.value.trim());

    if (userName.value === "") {
        paras[0].style.display = "block";
    }
    userName.addEventListener('input', function () {
        if (userName.value === "") {
            paras[0].style.display = "block";
        } else {
            paras[0].style.display = "none";

        }
    });


    if (dob.value === "") {
        paras[1].style.display = "block";
    }
    dob.addEventListener('input', function () {
        if (dob.value === "") {
            paras[1].style.display = "block";
        } else {
            paras[1].style.display = "none";

        }
    });

    if (cnic.value.length < 13 && cnic.value.length > 0) {
        paras[2].textContent = "Please enter exactly 13 numbers!";
        paras[2].style.display = "block";

    }
    else if (cnic.value.length > 13) {
        paras[2].textContent = "Please enter exactly 13 numbers!";
        paras[2].style.display = "block";
    } else if (cnic.value === "") {
        paras[2].style.display = "block";
    }
    else {
        paras[2].style.display = "none";
    }

    cnic.addEventListener('input', function () {

        if (cnic.value.length < 13 && cnic.value.length > 0) {
            paras[2].textContent = "Please enter exactly 13 numbers!";
            paras[2].style.display = "block";
        }
        else if (cnic.value.length > 13) {
            paras[2].textContent = "Please enter exactly 13 numbers!";
            paras[2].style.display = "block";
        }
        else if (cnic.value === "") {
            paras[2].style.display = "block";
        }
        else {
            paras[2].style.display = "none";
        }
    });


    if (password.value === "") {
        paras[3].style.display = "block";
    } else if (password.value.length < 6) {
        paras[3].style.display = "block";
        paras[3].textContent = "Password must be atleast 6 characters!";
    }
    password.addEventListener('input', function () {

        if (password.value === "") {
            paras[3].style.display = "block";
        }
        else if (password.value.length < 6 && password.value.length > 0) {
            paras[3].style.display = "block";
            paras[3].textContent = "Password must be atleast 6 characters!";
        } else {
            paras[3].style.display = "none";
        }

    });




    var array = [];
    
    if (userName.value === "") {
        return;
    } else if (dob.value === "") {
        return;
    } else if ((cnic.length < 13 && cnic.length > 0) || cnic.length > 13 || cnic.value === "") {
        return;
    } else if (password.value === "" || (password.length < 6 && password.length > 0)) {
        return;
    } else {
        
        const users = { "Name": userName.value.trim(), "Date Of Birth": dob.value.trim(), "CNIC": cnic.value.trim(), "Password": password.value.trim() };
        array.push(users);
        localStorage.setItem("Users", JSON.stringify(array));

        alert("You have successfully registered!");
        loginPage.style.display = "block";
        signupPage.style.display = "none";

    }



};

var logincnic = document.getElementById("login-cnic-div");
var loginCnicError = document.createElement("p");
loginCnicError.textContent = "CNIC is required!"
logincnic.appendChild(loginCnicError);

var loginpass = document.getElementById("login-pass-div");
var loginPassError = document.createElement("p");
loginPassError.textContent = "Password is required!"
loginpass.appendChild(loginPassError);

var loginCnicInp = document.getElementById("login-cnic");
var loginPassInp = document.getElementById("login-pass");

function loginBtn() {

    if (loginCnicInp.value.length < 13 && loginCnicInp.value.length > 0) {
        paras[5].style.display = "block";
        paras[5].textContent = "Please enter exactly 13 numbers!";

    }
    else if (loginCnicInp.value.length > 13) {
        paras[5].textContent = "Please enter exactly 13 numbers!";
        paras[5].style.display = "block";
    } else if (loginCnicInp.value === "") {
        paras[5].style.display = "block";
    }
    else {
        paras[5].style.display = "none";
    }

    loginCnicInp.addEventListener('input', function () {

        if (loginCnicInp.value.length < 13 && loginCnicInp.value.length > 0) {
            paras[5].textContent = "Please enter exactly 13 numbers!";
            paras[5].style.display = "block";
        }
        else if (loginCnicInp.value.length > 13) {
            paras[5].textContent = "Please enter exactly 13 numbers!";
            paras[5].style.display = "block";
        }
        else if (loginCnicInp.value === "") {
            paras[5].style.display = "block";
        }
        else {
            paras[5].style.display = "none";
        }
    });

    if (loginPassInp.value === "") {
        paras[6].style.display = "block";
    } else if (loginPassInp.value.length < 6) {
        paras[6].style.display = "block";
        paras[6].textContent = "Password must be atleast 6 characters!";
    }
    loginPassInp.addEventListener('input', function () {

        if (loginPassInp.value === "") {
            paras[6].style.display = "block";
        }
        else if (loginPassInp.value.length < 6 && loginPassInp.value.length > 0) {
            paras[6].style.display = "block";
            paras[6].textContent = "Password must be atleast 6 characters!";
        } else {
            paras[6].style.display = "none";
        }

    });

}


function pageToggle() {

    if (loginPage.style.display === "none") {
        loginPage.style.display = "block";
        signupPage.style.display = "none";
    } else {
        loginPage.style.display = "none";
        signupPage.style.display = "block";
    }

};

