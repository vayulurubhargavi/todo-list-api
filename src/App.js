import React from "react";
import TodoContainer from "./components/TodoContainer";

function App() {

   // const [newTask,setnewTask]=React.useState({
   //      title:"",
   //      completed:"false",
   //      id:Date.now()

   // });
   // create a new task array
   const [newTask,setNewTask]=React.useState([]);
   // console.log(newTask);

   // when plus button is clicked we setNew task 
   function handleAddingTask(){
      // const {name,value}=event.target;
      // setnewTask( prevTask => {
      //    return (
      //       {...prevTask,
      //          title : event.target.value
      //       }
      //    )
      // })
      setNewTask(
         
         [
         ...newTask,
         {
            // [name]:value,
        // title:event.target.value,
          title:document.getElementById('task-input').value,
          completed:"false",
          id:Date.now()
 
          }
   ])
      // console.log(newTask);
   }

// function handleAddTask()
// {
//    setNewTask(newTask);
//    console.log("added new task");
//    console.log(newTask);
// }

  return (
   <div className="App">
      {/* designing the todo bar that accepts  new task input with a add button which adds new task into todo-container designed  */}
      <div className="todo-bar-container">
         <div className="todo-bar">
            {/* put the list icon ,input field,add button icon  */}
               <div className="icon-container" style={{borderRadius : "10px 0px 0px 10px" }}>
                  <i class="fa-solid fa-list"></i>
               </div>
               <input id="task-input" type="text" placeholder="Enter the task"  autoComplete="off" />
               {/* //--value={newTask.title} onChange={handleTitle} */}
               <div className="icon-container" style={{borderRadius : "0px 10px 10px 0px" }} onClick={handleAddingTask}>
                  <i class="fa-solid fa-plus" ></i>
               </div>
        </div>
      </div>
      {/* we are passing the new task added as props to the todo-container */}
      <TodoContainer addedTask={newTask} />
   </div>
  );
}

export default App;
