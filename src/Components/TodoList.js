import React, { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import { GlobalContext } from "../MyContext";
import useCustomHook from "../useCustomHook";
import { ListCard } from "./ListCard";
import { ChangeNumber } from "./Redux/reducer";


export function Todolist(){



    const mystate = useSelector( state=> state.ChangeNumber)
    


    const {data} = useContext(GlobalContext)


    return(<div>
            <ul className="p-0">
                {mystate.transactions.map(e=>{
                    return <ListCard key={e.id} id={e.id} title={e.title} amount={e.amount}  ></ListCard>
                })}
            </ul>
    </div>)
}