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
/*var userName1 = userName.value.trim();*/
const dob = document.getElementById("user-dob");
const cnic = document.getElementById("user-cnic");
/*var userCnic = cnic.value.trim();*/
const password = document.getElementById("user-pass");
/*var userPassword = password.value.trim();*/

const paras = document.getElementsByTagName("p");




function submitbtn(event) {
    event.preventDefault();
    
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
    
};



function loginPage(){
var p = document.getElementById("loginLink");
p.style.display = "none";

    var login = document.getElementById("signup");
    login.textContent = "Login";

    dobdiv.remove();
    paras[1].remove();

    var btn = document.getElementById("signUpbtn");
btn.value = "Login";

}
