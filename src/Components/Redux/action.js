export const Increment = ()=>{
    return {
        type:'Increment'
    }
}


export const Decrement = ()=>{
    return {
        type:'Decrement'
    }
}

export const ChangeTitle = (id,title, amount)=>{
    return {
        type:'ChangeTitle',
        payload: {id,title, amount}
    }
}

export const ChangeTitleFromInput = (title)=>{
    return {
        type:'ChangeTitleFromInput',
        payload: title
    }
}

export const ChangeAmountFromInput = (amount)=>{
    return {
        type:'ChangeAmountFromInput',
        payload: amount
    }
}

export const SetInitialValues = ()=>{
    return {
        type:'SetInitialValues',
    }
}

export const DeleteTransaction = (id)=>{
    return {
        type:'DeleteTransaction',
        payload: id
    }
}

export const AddTransaction = ({id, title, amount})=>{
    return {
        type:'AddTransaction',
        payload: {id,title,amount}
    }
}

export const UpdateTransaction = ({title, amount}, index)=>{
    return {
        type:'UpdateTransaction',
        payload: {title,amount, index}
    }
}