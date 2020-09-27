import React from "react";
import "./EmployeeCard.css";

function EmployeeCard(props) {
    return (
        <tr key= {props.id}> 
            <th scope="row">{props.id}</th>
            <td><image alt={props.name} src={props.image}/></td>
            <td> {props.name} </td>
            <td> {props.phone} </td>
            <td> {props.email} </td>
            <td> {props.DOB} </td>
        </tr>
    );
}

export default EmployeeCard;