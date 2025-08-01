const addTaskButton = document.getElementById("addTask-btn");
const userTaskInput = document.getElementById("task-input");
const taskList=document.getElementById("previous-task");
const list = document.getElementById("new-taskList");
const createTask= document.getElementById("add-task");
const completedTask= document.getElementById("completed-task");
const pendingTask= document.getElementById("pending-task");
const status= document.querySelectorAll(".task-status");


let tasks = [];
function addTask() {
  if (userTaskInput.value !== '') {
    tasks = userTaskInput.value;
    userTaskInput.value = "";

    console.log(tasks);
    const itemTask = document.createElement("li");

    itemTask.style.listStyle = "none";
    itemTask.innerHTML = `${tasks}  <select name="task-status" class="task-status">
               <option value="" disabled selected>Status</option>
              <option value="">pending</option>
              <option value="">completed</option>
            </select>`;
    list.appendChild(itemTask);

    // console.log(tasks);
  }
  else{
    alert("Please enter a task before submitting!")
  }
};
function showCompletedTask(){
  taskList.style.visibility='visible'
  taskList.style.opacity='1'
  taskList.style.transition='all 0.5s;';
  status.forEach(select => {
  select.value = 'completed';
});}
function showPendingTask(){
  taskList.style.visibility='visible'
  taskList.style.opacity='1'
  taskList.style.transition='all 0.5s;';
  status.forEach(select => {
  select.value = 'pending';
});
};

addTaskButton.addEventListener("click", addTask);
pendingTask.addEventListener("click", showPendingTask);
completedTask.addEventListener("click", showCompletedTask);
