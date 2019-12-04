import React from 'react';
import ReactDOM from 'react-dom';

const Header=()=>{
    return (
        <div>
            <h1>My Todo List:</h1>
            <table border='details'>
            <tr>
            <th>Details:</th>
            <th>Deadline</th>
            <th>IsImportant:</th>
            <th>Done:</th>
            </tr>
            </table>
        </div>
    )

}

const Line=(props)=>{
    return(
        <div>
            <table border='details'>
            <tr>
            <th>{props.line.details}</th>
            <th>{props.line.deadline}</th>
            <th>--------{props.line.IsImportant}-------</th>
            <th>--{props.line.done}--</th>
            </tr>
            </table>
        </div>
    )
}



const Grid=(props)=>{
   
    return ( 
        props.grid.map(line=> <Line line={line}/>) 
    )
}


export const Todo =() =>{
    const todoList = [
        {
           details:"aaaaaaa",
           deadline:"10/10/10",
           IsImportant:"no",
           done:"yes"
        },
        {
            details:"bbbbbb",
            deadline:"10/10/10",
            IsImportant:"yes",
            done:"no"
        },
        {
            details:"cccccccc",
            deadline:"10/10/10",
            IsImportant:"no",
            done:"yes"
        },
        {
            details:"dddddd",
            deadline:"10/10/10",
            IsImportant:"yes",
            done:"no"
        },
        {
            details:"eeeeeeee",
            deadline:"10/10/10",
            IsImportant:"yes",
            done:"no"
        },
        {
            details:"ffffffffff",
            deadline:"10/10/10",
            IsImportant:"yes",
            done:"no"
        }
    ];
    return(
      
        <div>
            <Header/>
            <Grid grid={todoList}/>
        </div>
    )
}
