// todos = ['item 1', 'item 2', 'item 3'];

var todoList = {
  //todos: ['item 1', 'item 2', 'item 3'], 
  todos:[],
  displayTodos: function () {
    if(this.todos.length === 0) {
    console.log('Yours todos list is empty!');
        } else {
       console.log('My todos: ');
       for(var i= 0; i < this.todos.length; i++){
         
       if(this.todos[i].completed === true){
      console.log('(x)', this.todos[i].todoText);     
       
     } else {
       console.log('( )', this.todos[i].todoText);
       
     }
     
    }
        }
  },
    
    
  
  addTodo: function(todoText){// this will add new object in todos. 
    this.todos.push({ 
      todoText: todoText, 
      completed: false
    });
    this.displayTodos();
  }, 
  
  // change any item with anything.
  changeTodo: function(position, todoText){
    this.todos[position].todoText = todoText;
    this.displayTodos();
  }, 
  
  // below you delete it.
  deleteTodo: function (position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  }, 
  
  toggleCompleted: function(position){
    var todo = this.todos[position];
    todo.completed = !todo.completed; 
    this.displayTodos();
  }, 
  
  toggleAll: function() {
    var totalTodos = this.todos.length;
    var completedTodos = 0;
    
    for (var i = 0; i < totalTodos; i++) {
      if(this.todos[i].completed === true ){
      completedTodos++;
    }
  };
    if(completedTodos === totalTodos) {
      for (var i = 0; i < totalTodos; i++){
        this.todos[i].completed = false;
      }
      } else {
        for(var i = 0; i < totalTodos; i++){
          this.todos[i].completed = true;
        }
      }
    
    this.displayTodos();
  }
  
};
/*
//var displayTodosButton = document.getElementById("diplayTodosButton");
//var toggleAllButton = document.getElementById("toggleAllButton");



displayTodosButton.addEventListener('click', function(){ 
  todoList.displayTodos();
});


toggleAllButton.addEventListener('click', function(){
  todoList.toggleAll();
});
*/

var handlers = {
  displayTodos: function() {
    todoList.displayTodos();
  },
  toggleAll: function() {
    todoList.toggleAll();
  }, 
  addTodo: function() {
    var addTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = '';
  }, 
  
  changeTodo: function() {
    var changeTodoPositionInput = document.getElementById("changeTodoPositionInput");
    var changeTodoTextInput = document.getElementById('changeTodoTextInput');
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    changeTodoPositionInput.value = '';
    changeTodoTextInput.value = '';
  }, 
  
  deleteTodo: function() {
    var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
    todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
    deleteTodoPositionInput.value = '';
    
  }, 
  
  toggleCompleted: function() {
     var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
     todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
     toggleCompletedPositionInput.value = '';
     
       }
  
};

var view =  {
  
  displayTodos: function () {
    var todosUl = document.querySelector('ul');
    todosUl.innerHTML = '';
    for(var i = 0; i < todoList.todos.length; i++){
    var todoLi = document.createElement('li');
    var todo = todoList.todos[i];
    var todoTextWithCompletion ='';
    
    if (todo.completed === true){
      todoTextWithCompletion = '(x) ' + todo.todoText;
    } else {
      todoTextWithCompletion ='( ) ' + todo.todoText;
    }
    todoLi.textContent = todoTextWithCompletion;
   /* todoLi.textContent = todoList.todos[i].todoText;*/
    todosUl.appendChild(todoLi);
    }
}
};

