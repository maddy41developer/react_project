// import './List.css';

// function ListsPoints()
// {
//  const newlist = [1,2,3,4,5]
//  const rl = newlist.map((listvalues) =>{
//     return <li>{listvalues}</li>
    
//  });


//  return <div className="container">
//      <ul>{rl}</ul>

//  </div>}


// export default ListsPoints

function ListsPoints2(props)
{
 const myvalue  = props.myvalue;
 const rl = myvalue.map((listvalues) =>{
    console.log("done")
    console.log(listvalues)
    return <li>{listvalues}</li>

 });

 return <div className="container">
     <ul>{rl}</ul>

 </div>}

export default ListsPoints2

// do this in app.js
// const myvalue = [2,4,5,6]


