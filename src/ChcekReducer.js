import { findAllInRenderedTree } from "react-dom/test-utils"
import { useDispatch, useSelector } from "react-redux"
import { Increment, Decrement } from "./Components/Redux/action"



export const CheckReducer = ()=>{

    const mystate = useSelector(state => state.ChangeNumber)

    const dispatch = useDispatch()

    console.log('val is ', mystate)


    
    return <>    


    <div>
            <p>ID: {mystate.id}</p> 
            <p>Title: {mystate.title}</p> 
            <p>Amount: {mystate.amount}</p>
    </div>


    
    <div className="d-flex justify-content-between"> 

           

        <button onClick={()=> dispatch(Decrement())}>-</button>
                <h1>VAl : {mystate.count}</h1>
        <button onClick={()=> dispatch(Increment())}>+</button>
    </div>

    </>


}