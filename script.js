document.addEventListener('DOMContentLoaded', addTask);

const addButton = document.getElementById('add-task-btn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

function addTask(){
    const taskText = taskInput.value.trim();
    
    if(taskText === ""){
        alert('Enter a task');
    }
    else{
        const list = document.createElement('li');
        const btn = document.createElement('button');
        btn.classList.add('remove-btn');
        btn.textContent = "Remove";
        list.textContent = taskText;

        btn.addEventListener("click", function(){
            list.remove();
        })
        list.appendChild(btn);
        taskList.appendChild(list);
        taskInput.value = "";
    }
}
addButton.addEventListener("click", function(){
    addTask();
})
taskInput.addEventListener("keypress", function(event){
    if(event.key === 'Enter'){
        addTask();
    }
})
