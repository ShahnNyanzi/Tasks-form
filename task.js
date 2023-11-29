 const form = document.getElementById("task-form");
 const inputText = document.querySelector("#task");
 const taskList = document.querySelector(".collection");
 const clearTask = document.querySelector(".clear-tasks")
 const filter = document.querySelector("#filter")

 loadEventListeners();

 function loadEventListeners() {
    document.addEventListener("DOMContentLoaded", getTasks);
   form.addEventListener("submit", addTask);
    taskList.addEventListener("click", removeTask);
    clearTask.addEventListener("click", deleteTasks);
    filter.addEventListener("keydown", filterTasks);
}
 document.addEventListener("DOMContentLoaded",getTasks);
 function getTasks() {
     let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
   } else {
        tasks=JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function(task) {
         const li = document.createElement("li");
       li.className = "collection-item";
         li.appendChild(document.createTextNode(task));
        const link = document.createElement('a');
       link.className = 'delete-item secondary-content';
        link.innerHTML = '<i class="fa fa-remove"></i>';
      li.appendChild(link);
       taskList.appendChild(li);
   });
 }


form.addEventListener("submit", addTask);
 function addTask(e) {
    e.preventDefault()
    if (inputText.value === '') {
       alert("no task added")
    } else {
        alert("task added")
   }
    const li = document.createElement("li");
    li.className = "collection-item";
    li.appendChild(document.createTextNode(inputText.value));
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
   link.innerHTML = '<i class="fa fa-remove"></i>';
   li.appendChild(link);

   taskList.appendChild(li);
//    storing task in local storage
    StoretaskInLocalStorage(inputText.value);
//     //clearing task
   inputText.value='';
    
 }
// function StoretaskInLocalStorage(task) {
//     let tasks = [];
//     if (localStorage.getItem('tasks') === null) {
//         tasks = [];
//     } else {
//         tasks = JSON.parse(localStorage.getItem('tasks'))
//     }
//     tasks.push(task);
//     localStorage.setItem('tasks', JSON.stringify(tasks));
//     }

// function removeTask(e) {
//     if (e.target.parentElement.classList.contains('delete-item')) {
//         if (confirm("Are you sure?")) {
//             e.target.parentElement.parentElement.remove();
//             //remove task from localstorage
//             removeTaskfromlocalStorage
//             e.target.parentElement.parentElement.remove();
//             //(e.target.parentElement.parentElement);
//             //clear task from local storage
//             //clearTasksfromlocalStorage();

//         }
//     }
// }
// //clear tasks from local storage
// //function clearTasksfromlocalStorage(){
// // localStorage.clear()
// //}
// //delete task from local storage
// //function removeTaskfromlocalStorage(task){
// //let tasks;
// //if(localStorage.getItem(tasks)==='null'){
// //tasks=[];
// //}else{
// //tasks=JSON(localStorage.getItem(tasks));
// //}
// //tasks.forEach(function(task,index){
// //if(taskItem.textContent===task){
// // tasks.splice(index,1);
// // }
// // localStorage.setItem("tasks",JSON.stringify(tasks));

// //})

// //}
// function deleteTasks(e) {
//     //taskList.innerHTML=''
//     while (taskList.firstChild) {
//         taskList.removeChild(taskList.firstChild)

//     }
// }
function filterTasks(e) {
    const text = e.target.value.toLowerCase();
     document.querySelectorAll(".collection-item").forEach
        (function (task) {
            const item = task.firstChild.textContent;
;
            if (item.toLowerCase().indexOf(text) != -1) {
                console.log(task.style.display ='block')
                task.sytle.display = 'block';

          } else {
                task.style.display = "none";
           };
        });
}
// //function getTasks(){
//     //let tasks;
//     //console.log(localStorage.getItem(tasks))
//    // if(localStorage.getItem(tasks)==='null'){
//         //tasks=[];
//     //}else{
//         //tasks=JSON.stringify(localStorage.getItem(tasks));
//     //}
//     //tasks.forEach(function(task){
//         //const li=document.createElement("li");
//  //li.className="collection-item";
// //li.appendChild(document.createTextNode(task));
//  //const link=document.createElement('a');
//  //link.className='delete-item secondary-content';
// //link.innerHTML='<i class="fa fa-remove"></i>';
//  //li.appendChild(link);

// //taskList.appendChild(li);

//    // })
// //}
// //function StoretaskInLocalStorage(task){
//    //let tasks;
//    //if(localStorage.getItem(tasks)==='null'){
//     //tasks=[]}else{
//         //tasks=JSON.parse(localStorage.getItem(tasks));
//     //}
//  //tasks.push('task');
//  //localStorage.setItem('tasks',JSON.stringify(tasks));
//   //}
document.querySelector(".btn").addEventListener("click", loadData)
function loadData(){
    const xhr=new XMLHttpRequest();
    xhr.open("GET","data.txt",true );
    xhr.onload=function(){
        if(xhr.onload.status===200){
            console.log(xhr.onload.respondText);
        

        }

    }
    xhr.send();
}


