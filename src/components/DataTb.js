import React from 'react';
import moment from "moment";
import "../styles/data-tb.css";


function DataTb({employees, searchTerm, sortHandler}) {
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col" onClick={() => { sortHandler("first") }}>Name</th>
                    <th scope="col">Date of Birth</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone Number</th>
                </tr>
            </thead>
            <tbody>
                {employees.filter(employee => employee.name.last.toLowerCase().startsWith(searchTerm.toLowerCase()) || employee.name.first.toLowerCase().startsWith(searchTerm.toLowerCase())).map((person, id) =>
                    <tr key={id}>
                        <td><center><img src={person.picture.thumbnail}></img></center></td>
                        <td>{person.name.first} {person.name.last}</td>
                        <td>{moment(person.dob.date).format("L")}</td>
                        <td>{person.email}</td>
                        <td>{person.cell}</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
};

export default DataTb;