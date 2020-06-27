/* function showToDo(todo: { title: string; text: string }) {
  console.log(todo.title + ': ' + todo.text);
}

let myTodo = { title: 'Trash', text: 'Take out trash' };

showToDo(myTodo);
 */

interface ToDo {
  title: string;
  text: string;
}

function showToDo(todo: ToDo) {
  console.log(todo.title + ': ' + todo.text);
}

let myTodo = { title: 'Trash', text: 'Take out trash' };

showToDo(myTodo);
