import React , {createContext ,useEffect,useReducer, useState}from 'react'
import ReducersFunction from './Reducer'
import api from './api'

const initialStates = {
    todo: [
        {id:1,title:'Payment', amount:-100},
        {id:2,title:'Expense', amount:50},
        {id:3,title:'Schooling', amount:400},
        {id:4,title:'Shopping', amount:170},
        {id:5,title:'Learning', amount:980},
    ]
}  

export const GlobalContext = createContext(initialStates)




export default function Mycontext({children}){




    const [mystate, dispatch] = useReducer(ReducersFunction, initialStates)

    function addTodo(tododata){
        dispatch({
            type:'add',
            payload:tododata
        })
    }

    function delTodo(id){
        dispatch({
            type:'del',
            payload:id
        })
    }


    return(
    <GlobalContext.Provider value={{
        data: mystate.todo,
        addTodo,
        delTodo
     }}>    
 
     {children}

    </GlobalContext.Provider>
    )
}