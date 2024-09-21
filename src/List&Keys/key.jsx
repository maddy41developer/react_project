// function Member(props) {
    
//     const content = props.myvalue.map((show) =>
    
//     <div>
//         <h3>{show.id} : {show.title} : {show.content}</h3>
//     </div>);

   
// return (
//     <div>
//         {content}
//     </div>
// );
// }

// export default Member

// do this in app.js
// const myvalue = [
//     {id:1,title :'Frontend',content : 'Welcome to Frontend Development'},
//     {id:2,title : 'Backend',content : 'Welcome to Backend Development'}
// ]
const mydata = [100,200,500,400,300];
function ListKey (props) {
    const item = props.item;
    const key = props.keys;
    return (
        <li> {key} {item}</li>
    );
}
function MyList(props){
    const listItem = props.myvalue.map((listvalue,index) =>
    <ListKey keys = {listvalue} item = {listvalue} />
    );
return (
    <div>
        <h2>Correct Key Usage Example</h2>
        <ul>
            {listItem}
        </ul>
    </div>
);
}
export default MyList
// // // do this in app.js
// // const mydata = [100,200,500,400,300];
