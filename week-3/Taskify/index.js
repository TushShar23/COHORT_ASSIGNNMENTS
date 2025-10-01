
"use strict"

let selected = null;
const listItems = document.getElementsByClassName("box");
// this returns the array of items we have in the drop box
const todoBtn = document.querySelector("#TodoBtn");
const progressBtn = document.querySelector("#ProgressBtn");
const UrBtn = document.querySelector("#URbtn");
const finishBtn = document.querySelector("#finishBtn");
const progressbox = document.getElementById("myprogressbox");
const URbox = document.querySelector("#myURbox");
const finishBox = document.querySelector("#myfinishedBox");
const dragbox = document.querySelector("#mydragbox");

// This code was valid when i was testing with predefined tasks
// for(list of listItems){
//     list.addEventListener("dragstart",(e)=>{
//         selected = e.target

//

//     })
// }
function DraggingTasks(){
    // this function lets you drag and drop your tasks to any other category.
    progressbox.addEventListener("dragover", (e) => {
        e.preventDefault();
    });

    progressbox.addEventListener("drop", (e) => {
        // listItems.parentNode.removeChild(selected)
        progressbox.appendChild(selected);
        selected = null;
    });

    dragbox.addEventListener("dragover", (e) => {
        e.preventDefault();
    });

    dragbox.addEventListener("drop", (e) => {
        dragbox.appendChild(selected);
        selected = null;
    });

    URbox.addEventListener("dragover", (e) => {
        e.preventDefault();
    });

    URbox.addEventListener("drop", (e) => {
        URbox.appendChild(selected);
        selected = null;
    });

    finishBox.addEventListener("dragover", (e) => {
        e.preventDefault();
    });

    finishBox.addEventListener("drop", (e) => {
        finishBox.appendChild(selected);
        selected = null;
    });
}

// todo button
todoBtn.addEventListener("click", (e) => {
    const newDiv = document.createElement("div");
    const newInput = document.createElement("input");
    // const newbtn = document.createElement;
    newInput.type = "text";

    newInput.classList.add("box", "inp");
    newDiv.classList.add("box");

    // if(newInput.value === ""){
    //     alert("Empty")
    // }

    newDiv.appendChild(newInput);
    dragbox.appendChild(newDiv);

    newInput.focus();


    const handleEnter = (e) => {
    if (e.key === "Enter") {
        if (newInput.value === "") {
        alert("Task cannot be empty");
        newInput.focus();
        }
        else {

        newDiv.removeChild(newInput);
        newDiv.textContent = newInput.value;
        newInput.removeEventListener("keydown", handleEnter);

        newDiv.setAttribute("draggable", true);

        newDiv.addEventListener("dragstart", (e) => {
            selected = e.target;
            DraggingTasks()
        });

        }
    }
    }

    newInput.addEventListener("keydown", handleEnter);
});



//In Progress button
progressBtn.addEventListener("click",(e)=>{
    const newDiv = document.createElement("div");
    const newInput = document.createElement("input");
    // const newbtn = document.createElement;
    newInput.type = "text";

    newInput.classList.add("box", "inp");
    newDiv.classList.add("box");

    // if(newInput.value === ""){
    //     alert("Empty")
    // }

    newDiv.appendChild(newInput);
    progressbox.appendChild(newDiv);

    newInput.focus();


    const handleEnter = (e) => {
    if (e.key === "Enter") {
        if (newInput.value === "") {
        alert("Task cannot be empty");
        newInput.focus();
        }
        else {
        newDiv.removeChild(newInput);
        newDiv.textContent = newInput.value;
        newInput.removeEventListener("keydown", handleEnter);

        newDiv.setAttribute("draggable", true);

        newDiv.addEventListener("dragstart", (e) => {
            selected = e.target;
            DraggingTasks()
        });

        }
    }
    }

    newInput.addEventListener("keydown", handleEnter);
})


// UnderReview button
UrBtn.addEventListener("click",(e)=>{
    const newDiv = document.createElement("div");
    const newInput = document.createElement("input");
    // const newbtn = document.createElement;
    newInput.type = "text";

    newInput.classList.add("box", "inp");
    newDiv.classList.add("box");

    // if(newInput.value === ""){
    //     alert("Empty")
    // }

    newDiv.appendChild(newInput);
    URbox.appendChild(newDiv);

    newInput.focus();


    const handleEnter = (e) => {
    if (e.key === "Enter") {
        if (newInput.value === "") {
        alert("Task cannot be empty");
        newInput.focus();
        }
        else {
        newDiv.removeChild(newInput);
        newDiv.textContent = newInput.value;
        newInput.removeEventListener("keydown", handleEnter);

        newDiv.setAttribute("draggable", true);

        newDiv.addEventListener("dragstart", (e) => {
            selected = e.target;
            DraggingTasks()
        });

        }
    }
    }

    newInput.addEventListener("keydown", handleEnter);
})



// finish btn
finishBtn.addEventListener("click",(e)=>{
    const newDiv = document.createElement("div");
    const newInput = document.createElement("input");
    // const newbtn = document.createElement;
    newInput.type = "text";

    newInput.classList.add("box", "inp");
    newDiv.classList.add("box");

    // if(newInput.value === ""){
    //     alert("Empty")
    // }

    newDiv.appendChild(newInput);
    finishBox.appendChild(newDiv);

    newInput.focus();


    const handleEnter = (e) => {
    if (e.key === "Enter") {
        if (newInput.value === "") {
        alert("Task cannot be empty");
        newInput.focus();
        }
        else {
        newDiv.removeChild(newInput);
        newDiv.textContent = newInput.value;
        newInput.removeEventListener("keydown", handleEnter);

        newDiv.setAttribute("draggable", true);

        newDiv.addEventListener("dragstart", (e) => {
            selected = e.target;
            DraggingTasks()
        });

        }
    }
    }

    newInput.addEventListener("keydown", handleEnter);
})



// ******* I KNOW THERE IS REPETATION OF CODE BUT CODE IS WRITTEN IN THE MANNER THAT I CANNOT CHANGE THIS ON THE LAST MOMENT


// TodoBtn.addEventListener("click",(e)=>{
//     const newDiv = document.createElement("div")
//     newDiv.classList.add("box");
//     newDiv.textContent = "hello"
//     dragbox.appendChild(newDiv);
// })
// TodoBtn.addEventListener("click",(e)=>{
//     const newDiv = document.createElement("div")
//     newDiv.classList.add("box");
//     newDiv.textContent = "hello"
//     dragbox.appendChild(newDiv);
// })
// TodoBtn.addEventListener("click",(e)=>{
//     const newDiv = document.createElement("div")
//     newDiv.classList.add("box");
//     newDiv.textContent = "hello"
//     dragbox.appendChild(newDiv);
// })

// every category box should have btn=addnew and draganddrop functionality
// USE IDS WHEN USING DRAG AND DROP INSTEAD OF CLASSES.