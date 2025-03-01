var myNewTask = document.getElementById("newTask");
var taskContainer = document.getElementById("taskContent");
var taskArray;

if (localStorage.getItem("allTasks") != null) {
  taskArray = JSON.parse(localStorage.getItem("allTasks"));
  displayTask();
} else {
  taskArray = [];
}

function addTask() {
  var task = {
    taskInfo: myNewTask.value,
  };
  taskArray.push(task);
  localStorage.setItem("allTasks", JSON.stringify(taskArray));
  clearTaskInput();
  displayTask();
  console.log(taskArray);
  myNewTask.focus();
}

function clearTaskInput() {
  myNewTask.value = null;
}

function displayTask() {
  var taskBox = "";
  for (i = 0; i < taskArray.length; i++) {
    taskBox += `<div
                    class="taskbox rounded border border-secondary d-flex justify-content-between align-items-center mx-auto mt-4 pe-2 py-2">
                    <div class="d-flex align-items-center justify-content-between mx-2">
                    <span class="text-dark-emphasis fw-bold" id="toDoTask">${taskArray[i].taskInfo}</span>
                    </div>
                    <div class="d-flex align-items-center justify-content-between mx-2">

                   </button>
                    <button
                    class="trash border border-2 bg-secondary-subtle border-white d-flex justify-content-center align-items-center rounded rounded-circle">
                    <i class="fa-solid fa-pencil" onclick='updateTask(${i})'></i>
                    </button>



                                        <button
                    class="trash mx-2 border border-2 bg-secondary-subtle border-white d-flex justify-content-center align-items-center rounded rounded-circle">
                    <i class="fa-solid fa-trash" onclick="deleteTask(${i})"></i>
 
                    
                    
                    </div>

                    </div>`;
  }
  taskContainer.innerHTML = taskBox;
}

function deleteTask(i) {
  taskArray.splice(i, 1);
  localStorage.setItem("allTasks", JSON.stringify(taskArray));
  console.log(taskArray);
  displayTask();
}

let currentIndex;

function updateTask(index) {
  console.log(taskArray[index].taskInfo);

  currentIndex = index;
  myNewTask.value = taskArray[index].taskInfo;
  document.querySelector("#update").classList.remove("d-none");
  document.querySelector("#add").classList.add("d-none");
}

function Update() {
  taskArray[currentIndex].taskInfo = myNewTask.value;
  localStorage.setItem("allTasks", JSON.stringify(taskArray));
  displayTask();
  document.querySelector("#update").classList.add("d-none");
  document.querySelector("#add").classList.remove("d-none");
  clearTaskInput();
  myNewTask.focus();
}
