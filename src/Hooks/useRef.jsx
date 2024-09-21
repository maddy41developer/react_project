import React from 'react';
import { useRef,useEffect } from 'react';

const ColorTag = () => {
    const colorcontent = useRef('a');    //colorcontent = {current:null}
    const colors = ['#d529d0','#03a9f4','#d14614fa','#d51858']

    useEffect(() =>{
        console.log(colorcontent);
        console.log(colorcontent.current);
    });

    const styleParagraph = () => {
        const randomcolor = Math.floor(Math.random()* colors.length);
        colorcontent.current.style.color = colors[randomcolor];
    }

    return (
        <>
        <p ref = {colorcontent}>Welcome to React</p>      {/* colocontent = {current : p}  */}
        <button onClick = {styleParagraph}>Click Here</button>
       
      
        </> 
        
    )
}

export default ColorTag