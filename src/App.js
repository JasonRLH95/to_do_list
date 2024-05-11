import { useState } from 'react';
import './App.css';
import TaskComponent from './components/TaskComponent';
import DropDown from './components/DropDown';

function App() {
  const [tasksArr,setTasksArr] = useState([]);
  const [taskContent,setTaskContent] = useState("");
  const [dropFlag,setDropFlag] = useState(false);
  const [currentTask,setCurrentTask] = useState("");
  const [height,setHeight] = useState(window.innerHeight-5);
  
  class Task{
    color = "lightgrey";
    constructor(task){
      this.task = task;
    }
    setPriority(lvl){
      if(lvl === "Low"){
        this.color = "rgba(1, 245, 1, 0.659)";
      }
      if(lvl === "Normal"){
        this.color = "rgba(255, 255, 55, 0.686)";
      }
      if(lvl === "High"){
        this.color = "rgba(249, 174, 35, 0.719)";
      }
      if(lvl === "Urgent"){
        this.color = "rgba(255, 0, 0, 0.659)";
      }
    }
  }


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
        if(tasksArr.length===3){
          setHeight(height+53.5);
        }
        if(tasksArr.length>3){
          setHeight(height+85);
        }
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
        if(tasksArr.length===4){
          setHeight(height-53.5);
        }
        if(tasksArr.length>4){
          setHeight(height-85);
        }
        return val;
      }
    }))
  }

  const deployTasks=()=>{
    return tasksArr.map((val)=>{
      return <TaskComponent content={val.task} color={val.color} done={taskDone} setDropFlag={setDropFlag} tasksArr={tasksArr} setCurrentTask={setCurrentTask}/>
    })
  }

  const returnDropDown=()=>{
      const dropDown = document.getElementById("app_dropDownContainer");
      if(dropFlag===true && dropDown!==null){
        dropDown.style.display = "flex";
          return <DropDown currentTask={currentTask}/>
      }
      else if(dropFlag===false && dropDown!==null){
        dropDown.style.display = "none";
          return null;
      }
  }
  return (
    <div className="App">
      <div id='app_mainContainer'>
        <h1 id='app_header'>my To-Do list</h1>
        <div id='app_addTask'>
          <input onChange={(e)=>{setTaskContent(e.target.value)}} id='app_addTask_input' type="text" placeholder='Add Task'/>
          <button id='app_addTask_button' onClick={()=>{addTask(taskContent)}}>Add</button>
        </div>
        <div id='app_tasksContainer'>
          {deployTasks()}
        </div>
      </div>
      <div style={{height:height}} onClick={()=>{setDropFlag(false)}} id='app_dropDownContainer'>
        {returnDropDown()}
      </div>
    </div>
  );
}

export default App;
