    'use strict';

    const todoControl = document.querySelector('.todo-control'),
            headerInput = document.querySelector('.header-Input'),
            todoList = document.querySelector('.todo-list'),
            todoCompleted = document.querySelector('.todo-completed');

    const todoData = [
            // Как добавить новое дело ? В этот массив добавить новое дело.
            {
                value: 'Сварить кофе',
                completed: false
            },
            {
                value: 'Помыть посуду',
                completed: true
            }
    ];
    // Сами дела необходимо где-то хранить. Создадим массив.
    // Каждый объект - это отдельное дело, которое мы туда добавили

    const render = function() {
        // Добавим функцию, которая будет доблять эти дела на страницу (rander верстки)
            todoData.forEach(function(item){
                console.log(item);
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
 