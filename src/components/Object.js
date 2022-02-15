import React from "react";
import {Link} from "react-router-dom";

function Object(){

    const list = [
        {
            name:"Sam",
            age: 28,
            color: "Brown",
            id: 1
        },
        {
            name:"Bob",
            age: 93,
            color: "Orange",
            id: 2
        },
        {
            name:"Steve",
            age: 3,
            color: "Yellow",
            id: 3
        }
    ];


    let itemEles = list.map((obj, idx)=>
        <Link key={idx} to ={"/data/"+obj.id}>Name: {obj.name} - Age: {obj.age} - Color: {obj.color} - ID: {obj.id}</Link>
    )


    return(
        <div className="flexColumn">
            {itemEles}
        </div>
    )
}

export default Object;