import React ,{useContext, useState , useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GlobalContext } from '../MyContext'
import useCustomHook from '../useCustomHook'
import { AddTransaction, ChangeAmountFromInput, ChangeTitleFromInput, SetInitialValues, UpdateTransaction } from './Redux/action'


export default function AddTodo(){

    const {addTodo} = useContext(GlobalContext)
    const mystate = useSelector(state => state.ChangeNumber)

    const [title, setTitle]= useState(mystate.title)
    const [amount, SetAmount]= useState(mystate.amount)


    const dispatch = useDispatch()

    const newTodo = {
        id: mystate.id,
        title: mystate.title,
        amount : mystate.amount
    }



    function submittion(e){
        e.preventDefault();

        const index = mystate.transactions.findIndex(e=> e.id === newTodo.id)
        if(index !== -1){
            console.log('Entered Updation Mode')
            const newTodo = {
                title: mystate.title,
                amount : mystate.amount
            }

            console.log('Updation NewTodo', newTodo)
            dispatch(UpdateTransaction(newTodo , index))
            dispatch(SetInitialValues)
            return 
        }
        else{
            const obj = {
                id: Math.floor(Math.random() * (10 - 1 + 1)) + 10,
                title: mystate.title,
                amount : mystate.amount
            }
        
            console.log('Submission NewTodo', obj)
            dispatch(AddTransaction(obj))
            dispatch(SetInitialValues)
        }
        
        

    }


    return <div className='my-3'>
        <form onSubmit={submittion}>
            <input type="text" placeholder='Enter your task here' value={mystate.title} onChange={(e)=> dispatch(ChangeTitleFromInput(e.target.value))} className='form-control '></input>
            <input type="number" placeholder='Enter your amount' value={mystate.amount}  onChange={(e)=> dispatch(ChangeAmountFromInput(e.target.value)) } className='form-control my-3'></input>
            <button className='btn btn-success my-3 btn-block'>Submit</button>
       </form>

    </div>
}