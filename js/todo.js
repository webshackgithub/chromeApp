const todoForm = document.querySelector("#todo_form");
const todoList = document.getElementById("todo_list");

const TODOLIST_KEY = "todoList";

let todoListArray = [];

function onDeleteClick(event) {

    const delItem = event.target.parentElement;
    console.log(event);
    console.log(delItem);
    delItem.remove();
    
    todoListArray = todoListArray.filter(item => item.id !== parseInt(delItem.id));
    saveToDoList();
    
}

function paintToDoList(newTodoObj) {

    const todoItem = document.createElement("li");
    todoItem.id = newTodoObj.id;

    const todoButton = document.createElement("button");
    todoButton.innerText = "❌";
    todoButton.addEventListener("click", onDeleteClick);

    const todoSpan = document.createElement("span");
    todoSpan.innerText = newTodoObj.text;

    todoItem.appendChild(todoButton);
    todoItem.appendChild(todoSpan);

    todoList.appendChild(todoItem);
}

function saveToDoList() {

    localStorage.setItem(TODOLIST_KEY, JSON.stringify(todoListArray));
}

function onToDoSubmit(event) {

    event.preventDefault();
    
    const todoText = todoForm.querySelector("#todo_text");
    const todoItemObj = {text:todoText.value, id:Date.now()};

    todoListArray.push(todoItemObj);

    saveToDoList();       
    paintToDoList(todoItemObj);
    todoText.value = "";

}

todoForm.addEventListener("submit", onToDoSubmit);

const todo = JSON.parse(localStorage.getItem(TODOLIST_KEY));

if (todo !== null) {

    todoListArray = todo;
    todoListArray.forEach(paintToDoList);
}



