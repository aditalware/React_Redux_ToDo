import React from 'react'
import {useState} from 'react';
import PropTypes from 'prop-types'
import { deleteItem } from '../actions'
import Modal from 'react-modal';


function Editor(props){
  const [newtext,edit]=useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.editItem(newtext);
    props.toggle(false);
   
};
  return(<Modal 
  isOpen={props.open}

  >
   
        <div>
           <i className="fa fa-close close"  onClick={()=>{props.toggle(false)}}></i> 

              <form onSubmit={handleSubmit} >
                    <div className={"modal-div"}>
                        <label>Edit: </label>
                        <input type="text" name="edit" placeholder={props.text} onChange={(e)=>{edit(e.target.value)}}/>
                        <button type="submit" value="Done" className="mod">Done</button>
                    </div>
                </form>
        </div>

  </Modal>)
}

function Item({ onClick, completed, text, number ,deleteItem,editItem}) {
   
  const [open,toggle]=useState(false);


  return(
    <>
  <div className={'item'}>

    <li 
      
      style={{
        textDecoration: completed ? 'line-through' : 'none',
        width:"446px"
      }}
    >
      {text}
    </li>
    <i className="fa fa-trash" style={{color:"white",fontSize:"25px",marginRight:"10px"}} onClick={()=>{deleteItem()}}></i> 
    <i className="fa fa-edit" style={{color:"white",fontSize:"25px",marginRight:"5px"}} onClick={()=>{toggle(true)}}></i> 
    <i className="fa fa-check" style={{color:"white",fontSize:"25px"}} onClick={onClick}></i> 

  </div>
  <Editor
   open={open}
   toggle={toggle}
   editItem={editItem}
   text={text}
   
  />
  </>
  
)}

Item.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Item