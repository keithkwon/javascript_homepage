const todoForm = document.querySelector(".js-todoForm");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector(".js-todoList");
const TODOS_LS = "todos";
let todos = [];
let ID = 0;

function saveTodos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(todos));
}

function delTodo(event) {
  const li = event.target.parentElement;
  const cleanTodos = todos.filter(function (todo) {
    return todo.id != li.id;
  });
  todoList.removeChild(li);
  console.log(cleanTodos);
  todos = cleanTodos;
  saveTodos();
}

function paintTodo(text, number) {
  const li = document.createElement("li");
  const delBtn = document.createElement("span");
  delBtn.innerText = "✖";
  delBtn.addEventListener("click", delTodo);
  const span = document.createElement("span");
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.id = number;
  todoList.appendChild(li);
  const todoObj = {
    text: text,
    id: number,
  };
  if (number >= ID) {
    ID++;
  }
  localStorage.setItem("ID", ID);
  todos.push(todoObj);
  saveTodos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = todoInput.value;
  paintTodo(currentValue, ID);
  todoInput.value = "";
}

function loadTodos() {
  const loadedTodos = localStorage.getItem(TODOS_LS);
  if (loadedTodos) {
    const parsedLoad = JSON.parse(loadedTodos);
    parsedLoad.forEach(function (todo) {
      paintTodo(todo.text, todo.id);
    });
  }
}

function loadId() {
  ID = localStorage.getItem("ID");
  if (ID === null) {
    ID = 0;
  }
}

function init() {
  loadId();
  loadTodos();

  todoForm.addEventListener("submit", handleSubmit);
}

init();
