import { useState } from 'react';
import './App.css';
import TaskComponent from './components/TaskComponent';

function App() {
  const [tasksArr,setTasksArr] = useState([]);
  const [taskContent,setTaskContent] = useState("");
  
  class Task{
    constructor(task){
      this.task = task;
      // this.color = color;
    }
  }


  // const colorsArr=["#F5F0F4","#F0E8EE","#EBE0E8","#E6D8E2","#E1D0DC","#DFCCD9"];
  // const chooseRandomColor=()=>{
  //     let rand = Math.floor(Math.random()*colorsArr.length);
  //     return colorsArr[rand];
  // }

  const addTask=(task)=>{
    if(task.length!==0 && task.length<55){
      let doesExist = false;
      tasksArr.map((val)=>{
        if(val.task === task){
          doesExist = true;
        }
        return doesExist;
      })
      if(doesExist===false){
        // let color = chooseRandomColor();
        let currentTask = new Task(task);
        setTasksArr([...tasksArr, currentTask]);
      }
      else if(doesExist===true){
        return alert("Task already exist!")
      }
    }
    else{
      if(task.length===0){
        return alert("You must insert some content first!")
      }
      if(task.length>=54){
        return alert("Too long!")
      }
    }
  }

  const taskDone=(taskContent)=>{
    return setTasksArr(tasksArr.filter((val)=>{
      if(val.task !== taskContent){
        return val;
      }
    }))
  }

  const deployTasks=()=>{
    return tasksArr.map((val)=>{
      return <TaskComponent content={val.task} color={val.color} done={taskDone}/>
    })
  }

  return (
    <div className="App">
      <h1 id='app_header'>my To-Do list</h1>
      <div id='app_addTask'>
        <input onChange={(e)=>{setTaskContent(e.target.value)}} id='app_addTask_input' type="text" placeholder='Add Task'/>
        <button id='app_addTask_button' onClick={()=>{addTask(taskContent)}}>Add</button>
      </div>
      {/* <button onClick={()=>{console.log(tasksArr)}}>check</button> */}
      <div id='container'>
        {deployTasks()}
      </div>
    </div>
  );
}

export default App;
