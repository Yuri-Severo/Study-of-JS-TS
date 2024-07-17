const input = document.querySelector(".input-task");
const button = document.querySelector(".send-button");
const tasks = document.querySelector(".tasks");

button.addEventListener('click', e => {
    if (!input.value) return;
    createTask(input.value);
})

input.addEventListener('keypress', e => {
    if (e.keyCode === 13) {
        if (!input.value) return;
        createTask(input.value);
        clearInput();
    };
})

document.addEventListener('click', e => {
    const el = e.target;

    if( el.classList.contains('delete')) {
        el.parentElement.remove();
        saveTasks();
    }
});

function clearInput() {
    input.value = '';
    input.focus();
}

function createTask(taskName) {
    const li = document.createElement('li');   
    li.innerText = taskName;
    tasks.appendChild(li);
    clearInput();
    createDeleteButton(li);
    saveTasks();
}

function createDeleteButton(li) {
    li.innerText += ' ';
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.setAttribute('class', 'delete');
    li.appendChild(deleteButton);
}

function saveTasks(){
    const liContent = tasks.querySelectorAll('li');
    const taskList = [];

    for (let task of liContent){
        let taskText = task.innerText;
        taskText = taskText.replace('Delete', '').trim();
        taskList.push(taskText);
    }

    const tasksJSON = JSON.stringify(taskList);
    localStorage.setItem('tasks', tasksJSON); 
}

function reloadTasks(){
    const tasks = localStorage.getItem('tasks');
    const taskList = JSON.parse(tasks);

    for(let task of taskList){
        createTask(task);
    }
}
reloadTasks();
