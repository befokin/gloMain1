'use strict';

const todoControl = document.querySelector('.todo-control'),
        headerInput = document.querySelector('.header-input'),
        todoList = document.querySelector('.todo-list'),
        todoCompleted = document.querySelector('.todo-completed');
        
        let data = 0;

        if (localStorage.getItem('memory') && localStorage.getItem('memory') !== undefined && localStorage.getItem('memory') !== '') {
                data = JSON.parse(localStorage.getItem('memory'));
        }

data = {
        todoData: []
};

let deleteElem = function(deleteItem) {
        let newData = [];
        data.todoData.forEach(function(item) {
                if (item.value !== deleteItem) {
                        newData.push(item);
                }
        });

      data.todoData =  newData;
}

let render = function() {
    
        localStorage.setItem('memory', JSON.stringify(data.todoData));    

        headerInput.value = '';
        todoList.textContent = '';
        todoCompleted.textContent = '';
       
        
        data.todoData.forEach(function(item) {
        
                const li = document.createElement('li');
                li.classList.add('todo-item');

                li.innerHTML = '<span class="text-todo">'+ item.value +'</span>' +
                                        '	<div class="todo-buttons">' +
                                        '<button class="todo-remove"></button>' +
                                        '<button class="todo-complete"></button>' +
                                        '</div>';
                                                                        // в li будем добавлять верстку
                if (item.completed) {
                        //    дела добавить на страницу   
                        // учитываем условие comleted
                        todoCompleted.append(li);
                } else {
                        todoList.append(li);    
                }

                const btnTodoComplete = li.querySelector('.todo-complete');
                const btnTodoRemove = li.querySelector('.todo-remove');

                btnTodoComplete.addEventListener('click', function() {
                        item.completed =! item.completed;
                        render();
                });
                        //  Как менять статус дела? Выполнено оно или нет.

                btnTodoRemove.addEventListener('click', function() {
                      data.todoData =  deleteElem(item.value);
                        render();
                });
        });
};
        

todoControl.addEventListener('submit', function(event) {
        event.preventDefault();
        // навесим событие submit на форму
        // (страницу будет перезагружаться - стандартное событие submit)
        // теперь страница не перезагружается
        const newTodo = {
                value: headerInput.value,
                completed: false
        };

        data.todoData.push(newTodo);
//  в todoData добавим новый объект   
        render();
// Вызываем функцию render, чтобы у нас обновились все дела
});

render();