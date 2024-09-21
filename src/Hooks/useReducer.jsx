import { useReducer } from 'react';
const transactionReducer = (state,action) =>{
    switch(action.type){
        case 'WITHDRAW':
            return {count : state.count + action.payload}
        case 'DEPOSIT':
            return {count : state.count - action.payload}
        case 'RESET':
             return {count : 0}
        default:
            throw Error("Invalid action")
    }
}
 function Reducers(){
    const[state,dispatch] = useReducer(transactionReducer,{count : 0});
    return(
        <>
        <h3>{`Your value is ${state.count}`}</h3>
        <button onClick = {() => dispatch({type : "INCREMENT"})}>Increment</button>
        <button onClick = {() => dispatch({type : "DECREMENT"})}>Decrement</button>
        <button onClick = {() => dispatch({type : "RESET"})}>Reset</button>
        </>
    )
}

const transactionReducer1 = (state,action) =>{
    switch(action.type){
        case 'WITHDRAW':
            return {count : state.count + action.payload}
        case 'DEPOSIT':
            return {count : state.count - action.payload}
        case 'RESET':
             return {count : 0}
        default:
            throw Error("Invalid action")
    }
}
export default function Reducers1(){
    const withdraw = (amount) =>{
        dispatch({type:'WITHDRAW',payload:amount})
    }
 
    const deposit = (amount) =>{
        dispatch({type:'DEPOSIT',payload:amount})
    }

    const[state,dispatch] = useReducer(transactionReducer1,{count : 0});
    return(
        <>
        <h3>{`Balance is ${state.count}`}</h3>
        <button onClick = {() => withdraw(500)}>Withdraw</button>
        <button onClick = {() => deposit(500)}>Deposit</button>
        </>
    )
}