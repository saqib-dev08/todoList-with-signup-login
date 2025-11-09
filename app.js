var namediv = document.getElementById("name");

var dobdiv = document.getElementById("dob");

var emaildiv = document.getElementById("email");

var passdiv = document.getElementById("pass");


const userName = document.getElementById("user-name");

const dob = document.getElementById("user-dob");

const email = document.getElementById("user-email");

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


    if (email.value === "") {
        paras[2].style.display = "block";
    }
    else {
        paras[2].style.display = "none";
    }

    email.addEventListener('input', function () {

        if (email.value === "") {
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





    if (userName.value === "") {
        return;
    } else if (dob.value === "") {
        return;
    } else if (email.value === "") {
        return;
    } else if (password.value === "" || (password.length < 6 && password.length > 0)) {
        return;
    } else {

        let users = localStorage.getItem("userData") || [];
        console.log(users)


        var storage = users.length > 0 ? JSON.parse(users) : [];
        console.log(storage)

        const emailCheck = storage.find((element) => element.Email === email.value);
        console.log(emailCheck, "check")
        if (emailCheck) {
            paras[2].style.display = "block";
            paras[2].textContent = "Email already exists!"
            return;
        }
        let newUser = { "Name": userName.value.trim(), "Date Of Birth": dob.value.trim(), "Email": email.value.trim(), "Password": password.value.trim(), "Todos": ""};
        storage.push(newUser);
        localStorage.setItem("userData", JSON.stringify(storage));
        userName.value = "";
        dob.value = "";
        email.value = "";
        password.value = "";

        alert("You have successfully registered! Now please login");
        loginPage.style.display = "block";
        signupPage.style.display = "none";

    }



};

var loginEmail = document.getElementById("login-email-div");

var loginpass = document.getElementById("login-pass-div");

var loginEmailInp = document.getElementById("login-email");
var loginPassInp = document.getElementById("login-pass");

function loginBtn(event) {
event.preventDefault();

    if (loginEmailInp.value === "") {
        paras[5].style.display = "block";
    }
    else {
        paras[5].style.display = "none";
    }

    loginEmailInp.addEventListener('input', function () {

        if (loginEmailInp.value === "") {
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


    if (loginEmailInp.value === "") {
        return;
    } else if (loginPassInp.value === "") {
        return;
    } else {
        
        let users = localStorage.getItem("userData") || [];
        console.log(users, "users")
        let storage = users.length > 0 ? JSON.parse(users) : [];
        console.log(storage)
        let loginEmailCheck = storage.find((element) => element.Email === loginEmailInp.value);
        console.log(loginEmailCheck, "login")
        let loginUser = [];
        loginUser.push(loginEmailCheck);

        console.log(loginUser, "loginuser")
       /* let parse = JSON.parse(loginUser);
        let userData = localStorage.setItem("Login User", JSON.stringify(parse));*/

        console.log(loginEmailCheck, "emailcheck")
        if (!loginEmailCheck) {

            paras[5].style.display = "block";
            paras[5].textContent = "Email does not exists!";
        }
        

       else if(loginEmailCheck) {
        
        const loginPassCheck = loginUser.find((element) => element.Password === loginPassInp.value);
        console.log(loginPassCheck, "passcheck")
        if (!loginPassCheck) {
            paras[6].style.display = "block";
            paras[6].textContent = "Password is Incorrect!";
        }
    }

if(loginUser.length >= 1){ 
    let userStorage = localStorage.setItem("Login User", JSON.stringify(loginUser))
};
alert('Welcome ' + loginEmailCheck.Name + '!')
 loginEmailInp.value = "";
        loginPassInp.value = "";

}
window.location.href = 'todo.html';
}


loginPage.style.display = "block";
   signupPage.style.display = "none";

function pageToggle() {
    

    if (loginPage.style.display === "none") {
        loginPage.style.display = "block";
        signupPage.style.display = "none";
          userName.value = "";
        dob.value = "";
        email.value = "";
        password.value = "";
    } else {
        loginPage.style.display = "none";
        signupPage.style.display = "block"; 
         loginEmailInp.value = "";
        loginPassInp.value = "";
    }

};

