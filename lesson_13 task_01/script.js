    'use strict';

    const todoControl = document.querySelector('.todo-control'),
            headerInput = document.querySelector('.header-input'),
            todoList = document.querySelector('.todo-list'),
            todoCompleted = document.querySelector('.todo-completed');
          

    const todoData = [
            // Как добавить новое дело ? В этот массив добавить новое дело.
            {
                value: 'Сварить кофе',
                completed: false,
                removed: 0
            },
            {
                value: 'Помыть посуду',
                completed: true,
                removed: 0
            }
    ];
    // Сами дела необходимо где-то хранить. Создадим массив.
    // Каждый объект - это отдельное дело, которое мы туда добавили

    const render = function() {
         // Добавим функцию, которая будет доблять эти дела на страницу 
        //  (rander верстки)
        // if(headerInput.value === ''){
        //     alert('1');
        // } else {
      
        headerInput.value = '';
        todoList.textContent = '';
        todoCompleted.textContent = '';
        // очищаем дело перед записью новых дел
         
            todoData.forEach(function(item){
                console.log(item);
                const li = document.createElement('li');
                li.classList.add('todo-item');
                
                li.innerHTML = '<span class="text-todo">'+ item.value +'</span>' +
                                     '	<div class="todo-buttons">' +
                                            '<button class="todo-remove"></button>' +
                                            '<button class="todo-complete"></button>' +
                                     '</div>';
                                                                  // в li будем добавлять верстку
                if(item.completed) {
                     //    дела добавить на страницу   
                    // учитываем условие comleted
                    todoCompleted.append(li);
                    } else {
                    todoList.append(li);    
                }

                const btnTodoComplete = li.querySelector('.todo-complete');
            //  Как менять статус дела? Выполнено оно или нет.
                
                btnTodoComplete.addEventListener('click', function(){
                item.completed = !item.completed;
                render();
                })

                const btnTodoRemove = li.querySelector('.todo-remove');
                btnTodoRemove.addEventListener('click', function(){
                item.removed = 'delete';
                });
                   
            });
        
        };
    

    todoControl.addEventListener('submit', function(event){
            event.preventDefault();
            // навесим событие submit на форму
            // (страницу будет перезагружаться - стандартное событие submit)
            // теперь страница не перезагружается
            const newTodo = {
                        value: headerInput.value,
                        completed: false
            };

        todoData.push(newTodo);
        //  в todoData добавим новый объект   
        render();
        // Вызываем функцию render, чтобы у нас обновились все дела
           
    });
    render();
 