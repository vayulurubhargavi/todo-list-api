import React from "react";
import TodoItem from "./TodoItem";

function TodoContainer({addedTask}){
     console.log(addedTask);
    //  create a todo array to store todo items from api
    const [todos ,setTodos]=React.useState([]);
   
    const [task,setTask]=React.useState(addedTask);
    console.log(task);
       
    //fetch over the todo items from api and setTodos withe data received
    React.useEffect(function() {
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(res => res.json())
        .then(data => setTodos(data))
    },[])
    
    // whenever task is added we use UseEffect hook and render a todo item for the task by mapping over  the added task array
     React.useEffect(() =>{
      let newlyaddedtasks= addedTask.map( (item,id) => {
          return <TodoItem task={item} key={id} />
        });
        // we then also set here the newly added tasks to task array
       setTask(newlyaddedtasks)
      },[task])


    return (  
        <div className="todo-container">
          {/* adding the new task */}
          {task}  
          {/* we do map over the entire todo array  to render the items */}
          {todos.map ( (item,id) => { 

            return <TodoItem task={item} key={id} />
          })}
    


        </div>
)
}

export default TodoContainer;