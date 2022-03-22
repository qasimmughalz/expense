import React from "react"

const initialState = {
    count:0,
    title :'',
    id:0,
    amount:0,
    transactions: [
        
            // {id:1,title:'qasim',amount:450},
            // {id:1,title:'qasim',amount:450},
            // {id:1,title:'qasim',amount:450},
            // {id:1,title:'qasim',amount:450},
            // {id:1,title:'qasim',amount:450}
           
        ]
}

export const ChangeNumber = (state= initialState, action)=>{

    switch(action.type){
        case 'UpdateTransaction':

            const index = state.transactions.findIndex(todo => todo.id !== action.payload); //finding index of the item

            const newArray = [...state.transactions]; //making a new array
            newArray[index].title = state.title   //changing value in the new array
            return { 
            ...state, //copying the orignal state
            transactions: newArray, //reassingning todos to new array
            }   

        

        
        case 'Increment': 
          return {
            ...state, 
            count : state.count+1 
        }
        case 'Decrement': 
          return {
            ...state, 
            count : state.count-1 
        }
        case 'ChangeTitleFromInput': 
          return {
            ...state, 
            title: action.payload
        }
        case 'ChangeAmountFromInput': 
          return {
            ...state, 
            amount: action.payload
        }
        case 'SetInitialValues': 
        return {
          ...state, 
          id:0,
          title:'',
          amount:0
      }
        case 'ChangeTitle': 
          return {
            ...state, 
            id: action.payload.id,
            title : action.payload.title,
            amount: action.payload.amount 
        }
        case 'DeleteTransaction': 
        return {
          ...state, 
          transactions : state.transactions.filter(e=> e.id!= action.payload)
        }
        case 'AddTransaction': 
        return {
          ...state, 
          transactions : [
              ...state.transactions,
             {
              id: action.payload.id,
              title:action.payload.title,
              amount:action.payload.amount
            }
        ]
        }
        

        default: return state
    }

}