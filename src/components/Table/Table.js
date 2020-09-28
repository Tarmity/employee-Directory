import React from "react";
import "./Table.css";
import employees from "../../utils/employees.json";


const Table = props => {

    
    return (
        <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        {/* <th>id</th> */}
                        <th>image</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>DOB</th>
                    </tr>
                </thead>
                <tbody>
                    {props.employees.map(employee => {
                        return (
                            <tr key={employee.id}>
                                {/* <th scope="row">{employee.id}</th> */}
                                <td><img alt={employees.name} src={employee.image} /></td>
                                <td> {employee.name} </td>
                                <td> {employee.phone} </td>
                                <td> {employee.email} </td>
                                <td> {employee.DOB} </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Table;