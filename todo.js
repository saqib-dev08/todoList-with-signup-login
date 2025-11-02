function addTask() {
    const taskInp = document.getElementById("taskinp");
    let input = taskInp.value.trim();

    if (input === "") {
        return;
    }

    
    const container = document.getElementById("container");
    
    const maindiv = document.createElement("div");
    maindiv.setAttribute("class", "tasks-div");
    container.appendChild(maindiv);
    
    const div1 = document.createElement("div");
    div1.setAttribute("class", "div1");
    maindiv.append(div1);

    const check = document.createElement("input");
    check.setAttribute("type", "checkbox");
    check.setAttribute("class", "checkbox");
    div1.appendChild(check);

    let span = document.createElement("span");
    span.textContent = input;
    div1.appendChild(span);

    const editIcon = document.createElement("i");
    editIcon.setAttribute("class", "fa-solid fa-pen-to-square");

    const deleteIcon = document.createElement("i");
    deleteIcon.setAttribute("class", "fa-solid fa-trash");

    const div2 = document.createElement("div");
    div2.setAttribute("class", "icons")
    maindiv.appendChild(div2);
    div2.appendChild(editIcon);
    div2.appendChild(deleteIcon);

    deleteIcon.addEventListener('click', function () {
        maindiv.remove();
    });

    const newInp = document.createElement("input");
    newInp.setAttribute("class", "newinput");

    const savebtn = document.createElement("p");
    savebtn.setAttribute("class", "savebtn");
    savebtn.textContent = "Save";
    savebtn.style.display = "none";

    editIcon.addEventListener('click', function () {
        span.style.display = "none";
        newInp.style.display = "block";
        newInp.value = span.textContent;
        div1.appendChild(newInp);
        editIcon.style.display = "none";
        div1.appendChild(savebtn);
        savebtn.style.display = "block";
    });

    savebtn.addEventListener('click', function () {
        savebtn.style.display = "none";
        editIcon.style.display = "block";
        newInp.style.display = "none";
        span.style.display = "block";
        span.textContent = newInp.value;
        if (newInp.value === "") {
            maindiv.remove();
        }
    })

    var taskColor = true;

    check.addEventListener('click', function () {

        if (taskColor === true) {
            maindiv.style.backgroundColor = "rgb(140 238 140)";
            taskColor = false;
        } else {
            maindiv.style.backgroundColor = "white";
            taskColor = true;
        }
    });

    let loginUser = JSON.parse(localStorage.getItem('Login User'));
    console.log(loginUser, "user")
    let todos = loginUser.find((element) => element.Todos);
    console.log(todos, "todo")
todos.Todos.push(taskInp.value);
console.log(todos, "todo2")    

    taskInp.value = "";
    
    
}

function logout(){
    window.replace('index.html');
}

