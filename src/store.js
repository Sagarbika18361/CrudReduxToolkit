import {  configureStore } from '@reduxjs/toolkit'
import studentReducer from "./Features/crudSlice"

// import { readStudent } from './Features/crudSlice'

// const reducer = combineReducers({
    
//   })

 const store = configureStore({ 
    reducer:{
    stu : studentReducer,
    }
})

export default store;