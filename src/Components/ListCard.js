import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { GlobalContext } from "../MyContext";
import { ChangeTitle, DeleteTransaction } from "./Redux/action";


export function ListCard({id, title, amount}){


    const dispatch = useDispatch()

   

    const [show, setShow]= useState(false)

    const {delTodo}= useContext(GlobalContext)


    function remove(id){
        dispatch(DeleteTransaction(id))
    }

    function edit(id, title, amount){
        dispatch(ChangeTitle(id, title, amount))
    }




    return(<li className="d-flex my-2 justify-content-between align-items-center list-card relative"  onMouseOver={()=> setShow(true)} onMouseLeave={()=> setShow(false)}   >
        {show? <button onClick={()=> remove(id)} className="btn btn-danger text-white  p-1 delete-btn">x</button> : null}
        <div className="col-4 d-flex justify-content-start text-left">
            <p className="me-2 text-muted" >{id}</p>
            <p>{title}</p>
        </div>
        <div className="col-4" style={{textAlign: 'right'}}>
            <p>{amount}</p>
        </div>
        {show? <button onClick={()=> edit(id,title, amount)} className="btn btn-secondary text-white  p-1 edit-btn"> edit</button> : null}

    </li>)
}