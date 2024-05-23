
document.addEventListener("DOMContentLoaded", function(){
   const taskInput=document.getElementById("task");
const addTaskButton=document.getElementById("add-btn") ;
 const addList=document.getElementById("taskList")
addTaskButton.addEventListener("click" ,function(){
   const taskText= taskInput.value
   if (taskText ===""){
      alert("Please enter a task!");
      return;
  }
  
     const taskItem  = document.createElement("li")

    taskItem.innerHTML= `${taskText} <button id="delete-btn">delete</button>`;
   addList.appendChild(taskItem);
    taskInput.value="";

    const deleteButton=taskItem.querySelector("#delete-btn")

    deleteButton.addEventListener("click", function(){
      addList.removeChild(taskItem);

    })

})

}) 