import { configureStore,createSlice } from "@reduxjs/toolkit";
// const { getLocalStorage } = require("../utlis/localStorage");


const employeSlice =createSlice({
    name:"employe",
    initialState:{
        EmployeArr:[],
        AdminArr:[],
        CurrentEmploye:[],
        
    },
    reducers:{
        addEmploye:(state,action)=>{
            
            console.log(action)
            // state.EmployeArr.push(...action.payload.items)
            state.EmployeArr = action.payload.items;
            // console.log(state.EmployeArr)
            console.log(state.EmployeArr)
            console.log(state)
           
        },
        employeName:(state,action)=>{
            console.log(state.EmployeArr)
            console.log("402 for user Name")
            const userName = action.payload.employe;
            // console.log(userName)
            // state.CurrentEmploye = state.EmployeArr.filter((employe)=> employe.username === userName);
            // console.log(state.EmployeArr.filter((employe)=> employe.username === userName))
            // console.log(state.EmployeArr[0].password)

           
            // console.log(state.CurrentEmploye)

        }
    }
    
    
})
const store = configureStore({
    reducer:{
      employe : employeSlice.reducer
    }
})

export const actions = employeSlice.actions;
export default store;