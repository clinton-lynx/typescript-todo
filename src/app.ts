//DECLARATIONS  &&&&      SELECTORS              ********************************************

const inputEl = document.getElementById("input-el") as HTMLInputElement
const submitEl = document.querySelector<HTMLButtonElement>(".submit-el");
const taskList = document.querySelector<HTMLUListElement>(".task-list")!;
let errMessage = document.querySelector<HTMLParagraphElement>(".error-message")!;
const checkBtn = document.querySelector<HTMLSpanElement>(".check-btn");
const delBtn = document.querySelector<HTMLSpanElement>(".delete");


//     EVENTS LISTENERS**************************************

submitEl?.addEventListener('click', addTodo)
taskList?.addEventListener('click',removeTask)
// taskList?.addEventListener('click',checkTodo)



//       FUNCTIONS                 ******************************************8


function addTodo(e: Event)  {
  e.preventDefault();
  if(inputEl.value === ""){
    errMessage.innerHTML = "*******   please do some work    ***********"
  }else{
    errMessage.innerHTML = "";
    
    //CREATE LI FOR TODO
    const task = document.createElement('li')
   task.classList.add('task')
   // CREATE SPAAN FOR YTASKLEFT
   const taskLeft = document.createElement('span')! as HTMLSpanElement
   taskLeft.classList.add('task-span');
   taskLeft.innerHTML = inputEl.value

   //CREATE BTN-WRAPPER
   const btnWrapper = document.createElement('div')
   btnWrapper.classList.add('btn-wrapper')
  
   //CREATE BUTTONS FOR CJECK && DELETE
  const checkBtn = document.createElement('button')
  checkBtn.classList.add('check-btn')
  checkBtn.innerHTML = `<i class="fa-solid fa-circle-check"></i>`
  const deleteBtn = document.createElement('button')
  deleteBtn.classList.add('delete') 
  deleteBtn.innerHTML = `<i class="fa-solid fa-trash fa-1x"></i>`
  // deleteBtn.innerHTML = `khdksdj`
   //APPENDING THE ELEMENTS
   btnWrapper.append(checkBtn, deleteBtn)
  task.append(taskLeft, btnWrapper)
  taskList?.append(task)
  localStorage.setItem('taskInput', taskList?.innerHTML )

  // console.log(localStorage.getItem('taskInput'));
  // localStorage.clear()
  inputEl.value = ""; 
  }
}
// localStorage.clear()


taskList.innerHTML = localStorage.getItem('taskInput') as string
// RUNNING THE TASK ADDITION AND REMOVING  ******************

function removeTask  (e:Event) {
  console.log(e.target);
  const clickedItem = e.target as HTMLButtonElement
  if (clickedItem?.classList[0] === "delete"){
    clickedItem.parentElement?.parentElement?.remove()
    localStorage.setItem('taskInput', taskList?.innerHTML )
  } else if (clickedItem?.classList[0] === "check-btn"){
    clickedItem.parentElement?.parentElement?.style.opacity = ".464";
    clickedItem.parentElement?.parentElement?.style.backgroundColor = "";
    localStorage.setItem('taskInput', taskList?.innerHTML );
  }
}

