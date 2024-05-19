document.addEventListener('DOMContentLoaded', function() {
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    addTaskBtn.addEventListener('click', addTask);
    taskInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    function addTask() {
        const taskText = taskInput.value.trim();
        const currentDate = new Date().toLocaleDateString('pt-BR');

        if (taskText !== '') {
            const li = document.createElement('li');
            li.innerHTML = `<span>${taskText}</span> <span class="task-date">${currentDate}</span>`;

            const completeBtn = document.createElement('button');
            completeBtn.innerHTML = '<i class="fas fa-check concluir"></i>';
            completeBtn.classList.add('concluir');
            completeBtn.addEventListener('click', completeTask);

            const editBtn = document.createElement('button');
            editBtn.innerHTML = '<i class="fas fa-edit editar"></i>';
            editBtn.classList.add('editar');
            editBtn.addEventListener('click', editTask);

            const removeBtn = document.createElement('button');
            removeBtn.innerHTML = '<i class="fas fa-trash remover"></i>';
            removeBtn.classList.add('remover');
            removeBtn.addEventListener('click', removeTask);

            li.appendChild(completeBtn);
            li.appendChild(editBtn);
            li.appendChild(removeBtn);
            taskList.appendChild(li);

            taskInput.value = '';
        }
    }

    function completeTask(event) {
        const li = event.target.closest('li');
        li.classList.toggle('completed');
    }

    function editTask(event) {
        const li = event.target.closest('li');
        const span = li.querySelector('span');
        const newTaskText = prompt('Editar tarefa:', span.textContent);
        if (newTaskText !== null) {
            span.textContent = newTaskText;
        }
    }

    function removeTask(event) {
        const li = event.target.closest('li');
        taskList.removeChild(li);
    }
});
