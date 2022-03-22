export default function ReducersFunction(mystate, action){
    switch(action.type){
        case 'add':
            return {
                ...mystate,
                todo: [...mystate.todo, action.payload]
            }
        case 'del':
            return  {
              todo: mystate.todo.filter((e)=> e.id != action.payload)
            }
        default:
            return mystate
    }
}