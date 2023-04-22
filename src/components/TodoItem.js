import React from "react";

function TodoItem({task}){
    //to edit we define a class state
    const [editClass, setEditClass] = React.useState("fa-solid fa-pen-to-square");
    //   function to edit a todo item
    function updateItem(event){
         console.log("updating an item");
          
        let DOMElementToBeUpdated=event.target.parentElement.parentElement.children[0];
        console.log(DOMElementToBeUpdated);

         if(editClass === "fa-solid fa-pen-to-square")
         {
            // we get inner text of task.title
          let textToBeEdited=DOMElementToBeUpdated.children[1].innerText;
        //   we create a new dom element of type input and save the exisiting task title into it
          let node = document.createElement("input");
		  node.setAttribute("type", "text");
		  node.setAttribute("value", textToBeEdited);
			  console.log(node);
            //we append it as new child to   "tasks-icon " parent element 
		  DOMElementToBeUpdated.appendChild(node);
        //  removing the existing dom element tasks-name div
         DOMElementToBeUpdated.children[1].remove();
        //  we update edit icon by check icon
         setEditClass("fa-solid fa-check");
         }
         else{
            // so when we click on check icon 
            // we get the task title input value after updating  
            let newTaskAfterEdit = DOMElementToBeUpdated.children[1].value;
            console.log(newTaskAfterEdit);
            // we create a new div
             let node = document.createElement("div");
            //  we set the innerText for the div with new task input 
            node.innerText = newTaskAfterEdit;
            // we then append the div as child
            DOMElementToBeUpdated.appendChild(node);
            // we remove the input field child appended previously
            DOMElementToBeUpdated.children[1].remove();
            // set the edit icon back
            setEditClass("fa-solid fa-pen-to-square");
         }
        
    }
    // function to remove to do item completly
    function removeItem(event){
        console.log(event.target.parentElement.parentElement.children[0]);
        const DOMElementToBeDeleted=event.target.parentElement.parentElement.children[0];
        // this selects the tasks-name div
        // we need to remove the todo-item
        DOMElementToBeDeleted.parentElement.remove();
    }
   
   
    return(
        <div className="todo-item">
            {/* showing the task title */}
        <div className="tasks-icon">
           <i class="fa-solid fa-bars"></i>
           <div className="task-name">{task.title}</div>
        </div>
           {/* icons to delete and update */}
            <div className="icons">
                {/* we get intial value from editclass state */}
               <i className={editClass} onClick={updateItem}></i>
               <i class="fa-solid fa-trash-can" onClick={removeItem} ></i>
            </div>
          
        </div>
    )
}

export default TodoItem;