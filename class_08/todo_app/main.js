function TodoApp() {

    this.todos = ["Attend Class", "Catch the train", "Spend time with family"];

    this.addTodo = function(todo) {
        this.todos.push(todo);
        this.render();
    }

    this.render = function() {
        var allHTML = this.todos.reduce((currentHTML, todo) => {
            return currentHTML + `
            <li>${todo}</li>`
        }, "");
        allHTML = `<ul>${allHTML}</ul>`
        document.querySelector(".todos").innerHTML = allHTML;
    }
}

var myTodoApp = new TodoApp();

myTodoApp.render();

var input = document.querySelector("input");

var button = document.querySelector("button");

button.addEventListener("click", function() {
    if (input.value !== "") {
        myTodoApp.addTodo(input.value);
        input.value = "";
        input.focus();
    }
});

input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        myTodoApp.addTodo(input.value);
        input.value = "";
        input.focus();
    }
});