const newTaskInput = document.getElementById('newTaskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

/**
 * @param {string} taskText 
 * @returns {HTMLLIElement}
 */
function createNewTaskElement(taskText) {
    const listItem = document.createElement('li');
    listItem.classList.add('task-container');

    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    taskSpan.classList.add('task-text');
    
    const actionsDiv = document.createElement('div');
    actionsDiv.classList.add('actions');

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.classList.add('complete-btn');

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-btn');

    actionsDiv.appendChild(completeButton);
    actionsDiv.appendChild(deleteButton);

    listItem.appendChild(taskSpan);
    listItem.appendChild(actionsDiv);

    return listItem;
}

function handleAddTask() {
    const taskText = newTaskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task before adding!");
        return; 
    }
    const newListItem = createNewTaskElement(taskText);
    taskList.appendChild(newListItem);
    newTaskInput.value = '';
}


function handleTaskActions(event) {
    const target = event.target;

    if (target.classList.contains('complete-btn')) {
        const taskTextElement = target.closest('.task-container').querySelector('.task-text');
        
        taskTextElement.classList.toggle('completed');
        
        target.textContent = taskTextElement.classList.contains('completed') ? 'Un-Complete' : 'Complete';

    } 
    else if (target.classList.contains('delete-btn')) {
        const listItemToRemove = target.closest('.task-container');
        taskList.removeChild(listItemToRemove);
    }
}

addTaskButton.addEventListener('click', handleAddTask);

newTaskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        handleAddTask();
    }
});
taskList.addEventListener('click', handleTaskActions);