import React from 'react';
import './style/taskComp.css';

export default function TaskComponent(props) {

    const catchObjectToSetPriority=(task)=>{
        return props.tasksArr.map((val)=>{
            if(val.task === task){
                props.setCurrentTask(val);
                return val;
            }
            return null;
        })
    }
  return (
    <div 
    style={{backgroundColor:`${props.color}`}} 
    className='taskComponent_container'>
        <p className='taskComponent_content'>{props.content}</p>
        <div className='taskComponent_buttons'>
            <button className='taskComponent_priority' onClick={()=>{props.setDropFlag(true); catchObjectToSetPriority(props.content)}}>set priority</button>
            <button className='taskComponent_button' onClick={()=>{return props.done(props.content)}}>Delete</button>
        </div>
    </div>
  )
}
