document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTask');
    const taskList = document.getElementById('taskList');

    addTaskButton.addEventListener('click', function() {
        const taskText = taskInput.value.trim();

        if (taskText !== '') {
            // Crear elemento de lista (li)
            const taskItem = document.createElement('li');
            taskItem.textContent = taskText;

            // Crear botón de eliminar
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Eliminar';
            deleteButton.classList.add('delete-btn');

            // Agregar evento de clic al botón de eliminar
            deleteButton.addEventListener('click', function() {
                taskItem.remove();
            });

            // Agregar botón de eliminar al elemento de lista
            taskItem.appendChild(deleteButton);

            // Agregar evento de clic para marcar como completada
            taskItem.addEventListener('click', function() {
                taskItem.classList.toggle('completed');
            });

            // Agregar elemento de lista con botón de eliminar a la lista de tareas
            taskList.appendChild(taskItem);

            // Limpiar el campo de entrada
            taskInput.value = '';
        }
    });
});
