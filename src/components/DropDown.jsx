import React from 'react';
import './style/dropDown.css';


export default function DropDown(props) {
  return (
    <div className='dropDown_container'>
        <div className='dropDown_mainDiv'>
            <button id='urgentBtn' className='dropDown_mainDiv_buttons' onClick={(e)=>{props.currentTask.setPriority(e.target.innerHTML)}}>Urgent</button>
            <button id='highBtn' className='dropDown_mainDiv_buttons' onClick={(e)=>{props.currentTask.setPriority(e.target.innerHTML)}}>High</button>
            <button id='normalBtn' className='dropDown_mainDiv_buttons' onClick={(e)=>{props.currentTask.setPriority(e.target.innerHTML)}}>Normal</button>
            <button id='lowBtn' className='dropDown_mainDiv_buttons' onClick={(e)=>{props.currentTask.setPriority(e.target.innerHTML)}}>Low</button>
        </div>
    </div>
  )
}
