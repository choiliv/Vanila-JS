const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");


const toDos = [];

function saveToDo() {
    localStorage.setItem("todos",JSON.stringify(toDos));
}


function deleteToDo(event) {
   
    const li =event.target.parentElement;
    li.remove();
}

function paintToDO(newToDo) {
    
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newToDo;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo)
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value="";
    toDos.push(newToDo);
    paintToDO(newToDo);
    saveToDo();
}

toDoForm.addEventListener("submit", handleToDoSubmit);