import React from "react";
import "./Table.css";


function Table(props) {
    return (
        <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>image</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>DOB</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">id</th>
                        <td>Image</td>
                        <td>Name</td>
                        <td>Phone</td>
                        <td>email</td>
                        <td>DOB</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table;