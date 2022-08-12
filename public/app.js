"use strict";
//DECLARATIONS  &&&&      SELECTORS              ********************************************
const inputEl = document.getElementById("input-el");
const submitEl = document.querySelector(".submit-el");
const taskList = document.querySelector(".task-list");
let errMessage = document.querySelector(".error-message");
const checkBtn = document.querySelector(".check-btn");
const delBtn = document.querySelector(".delete");
//     EVENTS LISTENERS**************************************
submitEl === null || submitEl === void 0 ? void 0 : submitEl.addEventListener('click', addTodo);
taskList === null || taskList === void 0 ? void 0 : taskList.addEventListener('click', removeTask);
// taskList?.addEventListener('click',checkTodo)
//       FUNCTIONS                 ******************************************8
function addTodo(e) {
    e.preventDefault();
    if (inputEl.value === "") {
        errMessage.innerHTML = "*******   please do some work    ***********";
    }
    else {
        errMessage.innerHTML = "";
        //CREATE LI FOR TODO
        const task = document.createElement('li');
        task.classList.add('task');
        // CREATE SPAAN FOR YTASKLEFT
        const taskLeft = document.createElement('span');
        taskLeft.classList.add('task-span');
        taskLeft.innerHTML = inputEl.value;
        //CREATE BTN-WRAPPER
        const btnWrapper = document.createElement('div');
        btnWrapper.classList.add('btn-wrapper');
        //CREATE BUTTONS FOR CJECK && DELETE
        const checkBtn = document.createElement('button');
        checkBtn.classList.add('check-btn');
        checkBtn.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete');
        deleteBtn.innerHTML = `<i class="fa-solid fa-trash fa-1x"></i>`;
        // deleteBtn.innerHTML = `khdksdj`
        //APPENDING THE ELEMENTS
        btnWrapper.append(checkBtn, deleteBtn);
        task.append(taskLeft, btnWrapper);
        taskList === null || taskList === void 0 ? void 0 : taskList.append(task);
        localStorage.setItem('taskInput', taskList === null || taskList === void 0 ? void 0 : taskList.innerHTML);
        // console.log(localStorage.getItem('taskInput'));
        // localStorage.clear()
        inputEl.value = "";
    }
}
// localStorage.clear()
taskList.innerHTML = localStorage.getItem('taskInput');
// RUNNING THE TASK ADDITION AND REMOVING  ******************
function removeTask(e) {
    var _a, _b, _c, _d, _e, _f;
    console.log(e.target);
    const clickedItem = e.target;
    if ((clickedItem === null || clickedItem === void 0 ? void 0 : clickedItem.classList[0]) === "delete") {
        (_b = (_a = clickedItem.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.remove();
        localStorage.setItem('taskInput', taskList === null || taskList === void 0 ? void 0 : taskList.innerHTML);
    }
    else if ((clickedItem === null || clickedItem === void 0 ? void 0 : clickedItem.classList[0]) === "check-btn") {
        (_d = (_c = clickedItem.parentElement) === null || _c === void 0 ? void 0 : _c.parentElement) === null || _d === void 0 ? void 0 : _d.style.opacity = ".464";
        (_f = (_e = clickedItem.parentElement) === null || _e === void 0 ? void 0 : _e.parentElement) === null || _f === void 0 ? void 0 : _f.style.backgroundColor = "";
        localStorage.setItem('taskInput', taskList === null || taskList === void 0 ? void 0 : taskList.innerHTML);
    }
}
