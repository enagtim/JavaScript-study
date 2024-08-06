'use strict'
const TodoList = {
    task: [], 
    addtask: function(title, priority){
        const newTask = {
            title: title,
            priority: priority,
            id: this.task.length + 1,
        }
        this.task.push(newTask);
        return newTask
    },
    deltask: function(id){
        this.task = this.task.filter(task => task.id !== id);
        return this.task;
    },
    updatetask: function(id, title){
        const uptask = this.task.find(task => task.id === id);
        uptask.title = title;
        return uptask;                                                                                                                
    },
    sorttask: function(){
        const sort = this.task.sort((a, b) => {
            return b.id - a.id
        });
        return sort;
    }
};
console.log(TodoList.addtask('Задача 1', 1));
console.log(TodoList.addtask('Задача 2', 2));
console.log(TodoList.addtask('Задача 3', 3));
console.log(TodoList.deltask(3));
console.log(TodoList.updatetask(1, 'Обновленная задача №1'));
console.log(TodoList.updatetask(2, 'Обновленная задача №2'));
console.log(TodoList.sorttask());
console.log(TodoList.task);
