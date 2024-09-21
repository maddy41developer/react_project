import React, { useState ,useEffect} from 'react'
// use effect is same like didmount ad didupdate

function Effectcounters1(){
    const [counter,setcounter] = useState(100)
    const[counter1,setcounter1] = useState(200)
    const increment = () =>{
        setcounter((prev) => prev+3)
    }
    const decrement = () =>{
        setcounter1((prev) => prev-3)
    }
    useEffect(() => {
        console.log("inside useeffect")},[counter])
// here dependencies used which means when it get rendered once that time only use effect works again second time rendered use effect not worked while using dependencies

    return(
        <>
        <h3>{`counter value is ${counter}`}</h3>
        <h4>{`counter value is ${counter1}`}</h4>
        <button onClick ={increment}>Increment</button>
        <button onClick ={decrement}>decrement</button></>
    )
}

export default Effectcounters1;



function Statecounters2(){
    // console.log("Componenet Started step1");
    

    // useEffect(() => {alert("your life")})
    useEffect(() => setTimeout(() => {
        alert("welcome");
    },3000))
    return <div>
        <h1>Welcome to Useeffect</h1>
        {/* {console.log("no")}
        {console.log("no2")} */}
    </div>
}

// export default Statecounters2;
const sampleData = [
    {name : "arjun",age :4,location: 'chennai'},
    {name : "bharathi",age :2,location: 'chennai'}
]
 function Table1(){
    const [data,setData] = useState([]);
    useEffect(() => {
       console.log("done");
        setTimeout(() => {
            setData(sampleData);
        }, 3000);
    });
    return (
        <table>
           <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Location</th>
                </tr>
                {data.length === 0 && <td>Loading....</td>}
            {data.map((dat) => (
                // console.log(dat.name);
                <tr>
                  
                <td>{dat.name}</td>
                    <td>{dat.age}</td>
                    <td>{dat.location}</td>
                </tr>
                    
                
            ))}
        </table>
    );
}

// export default Table1;

function Checking(){
    // console.log("Componenet Started step1");
    
    const[data,setdata] = useState('welcome')
    // useEffect(() => {alert("your life")})
    useEffect(() => setTimeout(() => {
        alert("welcome");
    },3000))
    
    const changeName = () =>{
        console.log("done");
        setdata('JS')
        console.log(data)
        // user = "Angular"
    }
    return <div>
        <h1>{data}</h1>
        <button onClick = {changeName}>ChangeName</button>
        {/* {console.log("no")}
        {console.log("no2")} */}
    </div>
}


function StateExample2(){
    // let user = "React"
    const [user,setUser] = useState('React')

        // useEffect(() => {alert("your life")})
        useEffect(() => setTimeout(() => {
          console.log("hello")
        },3000))

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

// export default StateExample2;
