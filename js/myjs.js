function cout(p){
  console.log(p);
}
//////////////////

let //our html element
  input = document.querySelector(".add-task input"),
  addButton = document.querySelector(".add-task .plus"),
  taskContainer = document.querySelector(".tasks-content"),
  tasksCount = document.querySelector(".tasks-count span"),
  tasksCompleted = document.querySelector(".tasks-completed span")
;

window.onload = () =>{
  input.focus();
}

function creatTask(){
  let 
    task = document.createElement("span"),
    deleteButton = document.createElement("span"),
    text_task = document.createTextNode(input.value),
    text_deleteButton = document.createTextNode("Delete")
  ;
  
  task.appendChild(text_task);
  deleteButton.appendChild(text_deleteButton);
  task.appendChild(deleteButton)
  task.className="task-box";
  deleteButton.className="delete";
  taskContainer.appendChild(task);
};

//creat task
addButton.onclick = () =>{
  if(input.value!==""){
    let noTasksMsg = document.querySelector(".no-tasks-message");
    if(noTasksMsg!=null){
      noTasksMsg.remove();
    }
    creatTask();
    input.value="";
    input.focus();
  };
  tasksCount.textContent=document.querySelectorAll(".task-box").length;
};

//remove task
document.addEventListener("click",(e)=>{
  if(e.target.classList.contains('delete')){
    e.target.parentElement.remove();
    if(taskContainer.children.length===0){
      creatNoTasksMsg();
    };
  };
  tasksCount.textContent=document.querySelectorAll(".task-box").length;
});

//add and remove (finish)
document.addEventListener("click",(e)=>{
  if(e.target.classList.contains('task-box')){
    e.target.classList.toggle("finished");
  }
  tasksCompleted.textContent=document.querySelectorAll(".finished").length;
});

function creatNoTasksMsg(){
  let 
    Msg = document.createElement("span"),
    text_Msg = document.createTextNode("No Tasks To show")
  ;
  Msg.appendChild(text_Msg);
  Msg.className = "no-tasks-message";
  taskContainer.appendChild(Msg);
};

















