import React from 'react'
import ClassProps2 from './ClassProps2';

class ClassProps extends React.Component{
    render()
    {
        let name2 = {name : "Bharathi",age : 28}
        return(
            <div>
                <h1>Your name is {this.props.name}</h1>
                <ClassProps2 name = {name2}/> 

            </div>
        );
    }
}


export default ClassProps ;