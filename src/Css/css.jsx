import './style.css';
// import styles from './demo.module.css'
import styles from './demo.module.css'

function Reactstyle(){
    const mystyle = {
        color : "blue",
        fontfamily : "Arial"
    };
    return(
        <>
        <h1 style = {{color:"red",textAlign:"center"}}>Hello world</h1>
        <h2 style = {mystyle}>Welcome</h2>
        <h3 className="App1">Thank you</h3>
        <h3 className = {styles.heading}>Support</h3>
        </>
    )
}

export default Reactstyle;