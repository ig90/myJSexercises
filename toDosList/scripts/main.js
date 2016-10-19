 function getTodos(){
      var todos = [];
      var todos_storage = localStorage.getItem('todo')
      if (todos_storage !== null){
        todos = JSON.parse(todos_storage)
      }
      return todos;
    }
    function addTask(){
      var task = document.getElementById('task').value;
      var todos = getTodos();
      todos.push(task);
      localStorage.setItem('todo', JSON.stringify(todos));
      showTasks(); // zamiast odświeżania strony po dodaniu zadania
    }
    function removeTask(){
    	var id = this.getAttribute('id'); // this odnosi sie do obiektu, na którym została wywołana dana funkcja
    	//getAttribute('id') - do jakiego elementu się odnosi (id)
    	var todos = getTodos();
    	todos.splice(id, 1); // 1 - ile elementów będziemy usuwać
    	localStorage.setItem('todo', JSON.stringify(todos))
    	showTasks();
    }
    function showTasks(){ // pokazuje elementy z localstorage w htmlu
    	var todos = getTodos();
    	var html = '<ul>';
    	for(var i=0; i<todos.length; i++){
    		html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">usuń</button></li>'
    	}
    	html += '</ul>';
    	document.getElementById('todosList').innerHTML = html;
    	var removeButtons = document.getElementsByClassName('remove');
    	for (var i =0; i<removeButtons.length; i++){
    		removeButtons[i].addEventListener('click', removeTask);
    	}
    }
	document.getElementById('add').addEventListener('click', addTask);
	showTasks(); // wywołanie funkcji