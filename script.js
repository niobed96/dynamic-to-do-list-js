document.addEventListener('DOMContentLoaded', ()=>{

const addButton = document.getElementById('add-task-btn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
tasks = [];

function loadTasks() {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
        tasks = JSON.parse(savedTasks);
        tasks.forEach(taskText => {
            createTaskElement(taskText);
        });
    }
}

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function createTaskElement(taskText) {
    const list = document.createElement('li');
    const btn = document.createElement('button');
    btn.classList.add('remove-btn');
    btn.textContent = "Remove";
    list.textContent = taskText;
    
    btn.addEventListener("click", function() {
        const index = tasks.indexOf(taskText);
        if (index > -1) {
            tasks.splice(index, 1);
            saveTasks();
        }
        list.remove();
    });

    list.appendChild(btn);
        taskList.appendChild(list);
}

function addTask(){
    const taskText = taskInput.value.trim();
    
    if(taskText !== "") {
        tasks.push(taskText);
        createTaskElement(taskText);
        saveTasks();
        taskInput.value = "";
    }
    else{
        alert('Enter a task');
    }
}
addButton.addEventListener("click", function(){
    addTask();
})
loadTasks();
taskInput.addEventListener("keypress", function(event){
    if(event.key === 'Enter'){
        addTask();
    }
})
});
