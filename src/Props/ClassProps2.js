import React from 'react'

class ClassProps2 extends React.Component{
    render()
    {
        return(
            <div>
                <h1>Your name is {this.props.name.name} your age is {this.props.name.age}</h1>
            </div>
        );
    }
    
}

// ClassProps2.defaultProps  = {name : "Guru",age : 22}

export default ClassProps2 ;