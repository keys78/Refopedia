function openNav() {
  document.getElementById("mySidenav").style.display = "block";
  document.getElementById("mySidenav").style.width = "250px";
 
}

function closeNav() {
  document.getElementById("mySidenav").style.display = "none";
  document.getElementById("mySidenav").style.width = "0";
}



const form = document.querySelector("#task-form")
const plusbtn = document.querySelector("#Plus");
const closebtn = document.querySelector("#close-input");
const showTaskArea = document.querySelector(".showTaskArea");
const ultasks = document.querySelector(".tasks");
const warning = document.querySelector(".warn");
const inputTasks = document.querySelector("#input-task");
const addTaskBtn = document.querySelector("#submit-task");
const clearBtn = document.querySelector('.clear-tasks');


const filter = document.querySelector("#filter");


//Opening the taskinput area
plusbtn.addEventListener('click', openTaskInput);

 function openTaskInput(){
   if(showTaskArea.style.display = "none"){
     showTaskArea.style.display = "block";
   } 
 }

 //Closing the taskinput area
closebtn.addEventListener('click', closeTaskInput);

function closeTaskInput(){
    if(showTaskArea.style.display = "block"){
        showTaskArea.style.display = "none";
    }
}


//Load All eventListners
loadEventListeners();

//Load all event listners
function loadEventListeners() {
//DOM LOad event
document.addEventListener('DOMContentLoaded', getTasks);
 //Add task event
 form.addEventListener('submit', addTask);
 //Check tick
 ultasks.addEventListener('click', checkTick);
  //remove task event
  ultasks.addEventListener('click', removeTask);
  //remove all tasks
  clearBtn.addEventListener('click', clearAll);
  //filter events
  filter.addEventListener('keyup', filterTasks);
}




//Get tasks from ls
function getTasks() {
    let tasks;
    if(localStorage.getItem('tasks') === null) {
        task = [];
   } else {
     tasks = JSON.parse(localStorage.getItem('tasks'));
    }

   tasks.forEach(function(task){
       //create list item
    const li = document.createElement('li');
    const link = document.createElement('span');
    const check = document.createElement('span');


    li.className = "ok";
    link.className = "kala robust btnss";
    link.title= "Delete task";
    check.className = ".fa-check-circle";
    check.title = "Check to complete task";
    

    li.appendChild(document.createTextNode(task));
    link.innerHTML = '<i class="fas fa-trash-alt"></i>';
    check.innerHTML = '<i class="far fa-check-circle"></i>';

    ultasks.appendChild(li);
 
    li.appendChild(check);
    li.appendChild(link);

   });
 
}





var length = inputTasks.getAttribute("maxlength");
var countie = document.getElementById('count');
countie.innerHTML = length;
inputTasks.onkeyup = function () {
    countie.innerHTML = (length - this.value.length);
};






//set initial to zero
let count = 0;

//select values and buttons
const num = document.querySelector('#countrie');
const cntBtn = document.querySelector(".btnss");
console.log(cntBtn);
cntBtn.addEventListener('click', moveIt)

        function moveIt(e) {
        
            const styles = e.currentTarget.classList;
            if(styles.contains('ok')){
                count--;
            }
            else if(styles.contains('additive')){
                count++;
            }
            else{
                count = 0;
            }
            if(count > 0){
                num.style.color = "white";
            }
            if(count === 0){
                num.style.color = "white"; 
            }
    
            num.textContent = count;





        }























//Add Task
 function addTask(e) {
    if(inputTasks.value === ''){
        warning.style.display = "block";
    } else {
        alert('Task added to list')
    }

  
      //create list item
    const li = document.createElement('li');
    const link = document.createElement('span');
    const check = document.createElement('span');


    li.className = "ok";
    link.className = "kala";
    link.title= "Delete task";
    check.className = ".fa-check-circle";
    check.title = "Check to complete task";
    

    li.appendChild(document.createTextNode(inputTasks.value));
    link.innerHTML = '<i class="fas fa-trash-alt"></i>';
    check.innerHTML = '<i class="far fa-check-circle"></i>';

    ultasks.appendChild(li);
 
    li.appendChild(check);
    li.appendChild(link);

    
    //Store in Local storage
    storeTaskInLocalStorage(inputTasks.value);

    inputTasks.value = "";


    e.preventDefault();
 }

  //Store Task
  function storeTaskInLocalStorage(task) {
    let tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
}





  // Check the completed button
 function checkTick(e) {
    if(e.target.classList.contains('fa-check-circle')) {
        alert("Nice one champ! Go harder!")
        e.target.style.color = "#00FF00";
    } 
 }


 //remove Task
function removeTask(e) {
    if(e.target.parentElement.classList.contains('kala')) {
        if(confirm('Are you sure')){
        e.target.parentElement.parentElement.remove();

        //remove from Ls
        removeTaskFromLocalStorage(e.target.parentElement.parentElement);
        }
    }
}


//remove from Ls
function  removeTaskFromLocalStorage(taskItem) {
    let tasks;
     if(localStorage.getItem('tasks') === null) {
         tasks = [];
     } else {
       tasks = JSON.parse(localStorage.getItem('tasks'));
     }

     tasks.forEach(function(task, index){
         if(taskItem.textContent === task) {
            tasks.splice(index, 1);
         }
     });

     localStorage.setItem('tasks', JSON.stringify(tasks));
}







//clear all
function clearAll() {
    // taskList.remove();

    while(ultasks.firstChild){
        ultasks.removeChild(ultasks.firstChild);
    }

    //clear from Ls
    clearTaskFromLocalStorage();
}

// Clear Task From LS
function clearTaskFromLocalStorage() {
    localStorage.clear();
}




//filter tasks
function filterTasks(e) {
    const text = e.target.value.toLowerCase();
    document.querySelectorAll('.ok').forEach(function(task){
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display = "block";
        } else {
            task.style.display = "none";
        }
    });
}




/////// COVER INTERFACE ///////////////////////////
//   const coverbtn = document.querySelector('#signin');
//   const cover = document.querySelector('.COVER');

//   coverbtn.addEventListener('click', openSign);

//   function openSign(){
//       cover.style.animation = "all linear 0.7s";
//       cover.remove();
//   }


///// LOGIN INTERFACE /////////////////////
  

    /// DARK MODE //////////////
    const darkM = document.querySelector("#darkmode");
    const blackie = document.querySelector(".blackie");
    const blackies = document.querySelector(".blackies");
    const blackiess = document.querySelector(".blackiess");

    darkM.addEventListener("click", darkieM);
    

    function darkieM(){
        blackie.classList.toggle('show');
        blackies.classList.toggle('show');
        blackiess.classList.toggle('show');
       
    }

   


var mySong = document.getElementById('mySong');

var box = document.getElementById('indicate');

function playPause() {
    if (mySong.paused) {
        mySong.play();
       
    
    } else { 
        mySong.pause();
         
       
    }
}

box.addEventListener("click", playPause);
