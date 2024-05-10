import React from 'react';
import './style/taskComp.css';

export default function TaskComponent(props) {
  return (
    <div 
    // style={{backgroundColor:`${props.color}`}} 
    className='taskComponent_container'>
        <p className='taskComponent_content'>{props.content}</p>
        <button className='taskComponent_button' onClick={()=>{return props.done(props.content)}}>Delete</button>
    </div>
  )
}
