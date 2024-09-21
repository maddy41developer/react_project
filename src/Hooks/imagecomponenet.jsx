
import myImage from './images/child_education.png'


export default function ImageComponent(){
    // let user = "React"
    return(
        <>
       <img src='child_education.png' alt="images" />
       <img src = {myImage} ></img>
       <img src = 'images/child_education.png' alt = "images" />

        </>
    )
}