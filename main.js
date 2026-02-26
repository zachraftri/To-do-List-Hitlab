document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById ('task-input');
    const addTaskBtn = document.getElementById ('add-task-button');
    const taskList = document.getElementById ('task-list');


    const addTask = (event) => {
        event.preventDefault();
        const taskText = taskInput.value.trim();
        if (!taskText) {
            return;
        }

        const li = document.createElement('li');
        li.innerHTML = `<input type="checkbox" class="checkbox"> <span>${taskText}</span>`

        taskList.appendChild(li);
        taskInput.value = '';
    }

    addTaskBtn.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (e) => {
        if(e.key === 'Enter') {
            addTask(e);
        }
    })
});
