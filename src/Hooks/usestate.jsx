import  React,{ useState } from 'react'

function StateExample(){
    // let user = "React"
    const [user,setUser] = useState('React')

    const changeName = () =>{
        // console.log("done");
        setUser('JS')
        // user = "Angular"
    }
    return(
        <>
        <h3>{user}</h3>
        <button onClick = {changeName}>ChangeName</button>
        </>
    )
}

export default StateExample;

function Statecounter(){
    const [counter,setcounter] = useState(100)
    const increment = () =>{
        setcounter((prev) => prev+3)
    }
    const decrement = () =>{
        setcounter((prev) => prev-3)
    }

    return(
        <>
        <h3>{`counter value is ${counter}`}</h3>
        <button onClick ={increment}>Increment</button>
        <button onClick ={decrement}>Decrement</button></>
    )
}

// export default Statecounter;

function Statecounter5(){
    const [counter,setcounter] = useState({value : 100,type:'counter'})
    const increment = () =>{
        setcounter((prev) => {
            return {value:prev.value+3}
    })
    }
    const decrement = () =>{
        setcounter((prev) => {
            return {value:prev.value-3}
        })
    }

    return(
        <>
        <h3>{`value is ${counter.value}`}</h3>
        <button onClick ={increment}>Increment</button>
        <button onClick ={decrement}>Decrement</button></>
    )
}

// export default Statecounter5;
