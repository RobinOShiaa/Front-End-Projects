// I
const $taskForm = document.querySelector('#input-form');
const $tasks = document.querySelector('.collection');
const $clearAllBtn = document.querySelector('.empty-tasks');
const $filterBtn = document.querySelector('#parser');
const $taskEntrys = document.querySelector('#task');



document.addEventListener('DOMContentLoaded', (e) => {
    let storageList;
    if(localStorage.getItem('tasks') === null){
      storageList = [];
    } else {
      storageList = JSON.parse(localStorage.getItem('tasks'));
    }
  
    storageList.forEach(function(task){
      const li = document.createElement('li');
      li.className = 'collection-item';
      li.appendChild(document.createTextNode(task));
      const link = document.createElement('a');
      link.className = 'delete-item secondary-content';
      link.innerHTML = '<i class="fa fa-remove"></i>';
      li.appendChild(link);
      $tasks.appendChild(li);
    });
  });



  $taskForm.addEventListener('submit', (e) => {
    if($taskEntrys.value === '') {
      alert('Please enter task to be inserted');
    }
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode($taskEntrys.value));
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';
    li.appendChild(link);
    $tasks.appendChild(li);
  
    storeInStorage($taskEntrys.value);
    $taskEntrys.value = '';
  
    e.preventDefault();
  });

  $tasks.addEventListener('click', (e) => {
    if(e.target.parentElement.classList.contains('delete-item')) {
      if(confirm(`Are you sure you wish to remove the task: ${e.target.parentElement.parentElement.textContent}`)) {
        e.target.parentElement.parentElement.remove();
  
        deleteTaskStorage(e.target.parentElement.parentElement);
      }
    }
  });


  $clearAllBtn.addEventListener('click', (e) => {

    while($tasks.firstChild) {
      $tasks.removeChild($tasks.firstChild);
    }
    emptyStorage();
    });
    $filterBtn.addEventListener('keyup', filterTasks);


function storeInStorage(task) {
  let storageList;
  if(localStorage.getItem('tasks') === null){
    storageList = [];
  } else {
    storageList = JSON.parse(localStorage.getItem('tasks'));
  }

  storageList.push(task);

  localStorage.setItem('tasks', JSON.stringify(storageList));
}



function deleteTaskStorage(taskItem) {
  let storageList;
  if(localStorage.getItem('tasks') === null){
    storageList = [];
  } else {
    storageList = JSON.parse(localStorage.getItem('tasks'));
  }

  storageList.forEach(function(task, index){
    if(taskItem.textContent === task){
      storageList.splice(index, 1);
    }
  });

  localStorage.setItem('tasks', JSON.stringify(storageList));
}



function emptyStorage() {
  localStorage.clear();
}

function filterTasks(e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll('.collection-item').forEach(function(task){
    const item = task.firstChild.textContent;
    if(item.toLowerCase().indexOf(text) != -1){
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });
}