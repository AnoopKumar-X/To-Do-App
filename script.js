let tasksData = {}
const todo = document.querySelector("#todo")
const progress = document.querySelector("#progress")
const done = document.querySelector("#done")
const tasks = document.querySelectorAll(".task")
const addTaskBtn = document.querySelector("#add-new-task")

 const modal = document.querySelector(".modal")

 let draggedTask = null
 tasks.forEach((task) => {
     task.addEventListener("dragstart", () => {
         draggedTask = task
         console.log("jeee")
     })
 
     task.addEventListener("dragend", () => {
         draggedTask = null
     })
 })

function showFromLocalStorage(){

    if (localStorage.getItem("tasks")) {
        const data = JSON.parse(localStorage.getItem("tasks"))
        
        for (const col in data) {
            const column = document.querySelector(`#${col}`)
    
            data[col].forEach(t => {
                const heading=t.title
                const description=t.desc
                addtask(heading,description,column)
              
            })
        }
    
        updateCounts()
    }
}
showFromLocalStorage()


function addDragEventsOnColumn(column) {

    column.addEventListener("dragenter", (dets) => {
        dets.preventDefault()
        column.classList.add("hover-over")
    })
    
    column.addEventListener("dragleave", (dets) => {
        dets.preventDefault()
        column.classList.remove("hover-over")
    })

    column.addEventListener("dragover", (dets) => {
        dets.preventDefault()
    })
    
    // 🔥 THIS IS THE IMPORTANT PART
    column.addEventListener("drop", (dets) => {
        dets.preventDefault()
        if (draggedTask) {
            column.appendChild(draggedTask)
            updateCounts()
        }
        column.classList.remove("hover-over")
        
    })
}

addDragEventsOnColumn(progress)
addDragEventsOnColumn(todo)
addDragEventsOnColumn(done)

function addtask(title, desc, column) {
    if(title && desc){
        let task = document.createElement("div");
        task.className = "task";
        task.setAttribute("draggable", "true");
    
        task.innerHTML = `
            <h2>${title}</h2>
            <h4>${desc}</h4>
            <button>Delete</button>
        `;
       column.appendChild(task);
        task.addEventListener("dragstart", () => {
            draggedTask = task;
        });
    
        task.addEventListener("dragend", () => {
            draggedTask = null;
        });
    
        const deleteBtn = task.querySelector("button");
        deleteBtn.addEventListener("click", () => {
            task.remove();
            updateCounts();
        });
    }else{
          modal.classList.remove("active")

    }

}

(function modalHandler(){

   
    const toggleModalBtn = document.querySelector(".toggle-modal")
    const modalBg = document.querySelector(".bg")

    
    toggleModalBtn.addEventListener("click", (dets) => {
        modal.classList.toggle("active")
        
    })
    modalBg.addEventListener("click", (dets) => {
        modal.classList.remove("active")
    })
})()

 function updateCounts() {
     const coloumns = [todo, progress, done]
     coloumns.forEach((col) => {
         const tasks = col.querySelectorAll(".task")
         const count = col.querySelector(".right")
         tasksData[col.id] = Array.from(tasks).map(t => {
             return {
                 title: t.querySelector("h2").innerText,
                 desc: t.querySelector("h4").innerText
             }
         })
         localStorage.setItem("tasks", JSON.stringify(tasksData))
         if (count) {
             count.innerText = tasks.length
         }
     })
 }
 





addTaskBtn.addEventListener("click", (dets) => {
   const textInpEl = document.querySelector(".textinp");
const taskInfoEl = document.querySelector(".taskinfo");

const textInp = textInpEl.value;
const taskInfo = taskInfoEl.value;

addtask(textInp, taskInfo, todo);
 modal.classList.remove("active")
 updateCounts()
textInpEl.value = '';
taskInfoEl.value = '';
})
 
