import { createStore } from "redux"
import { AllReducers } from "./Components/Redux/AllReducers"


const Store = createStore(AllReducers)


export default Store;