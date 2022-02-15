import React from "react";
import {useParams} from "react-router-dom";

function Items(){

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

    const params = useParams();

    const curObj = list.find(obj => String(obj.id) === params.id);
// console.log(list.find(obj => String(obj.id) === params.id));


    return(
        <h3>
            Name: {curObj.name} - Age: {curObj.age} - Color: {curObj.color} - ID: {curObj.id}
        </h3>
    )
}

export default Items;