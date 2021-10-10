import './../../node_modules/bootstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

function CustomizedTables() {

    const url = 'http://localhost:5000/user';
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const [rows, setRow] = useState([]);

    useEffect(() => {
        getUser();
    });

    const getUser = async () => {
        const response = await axios.get(url);
        setRow(response.data.users);
    }

    const deleteUser = async (id) => {
        await axios.delete(`${url}/${id}`)
            .then(() => {
                setSuccess('deleted successful');
                setError('');
            })
            .catch(() => {
                setError('deleted failed');
                setSuccess('');
            });
    }

    let id = 1;

    return (
        <div className="col-md-7 m-auto py-5">
            <table className="table table-striped table-dark">
                <thead>
                    <tr>
                        <th scope="col">Serial</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Mobile</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row) => (
                        <tr>
                            <th scope="row">{ id++ }</th>
                            <td>{row.username}</td>
                            <td>{row.email}</td>
                            <td>{row.mobile}</td>
                            <td>
                                <button className="btn btn-danger btn-sm" onClick={() => deleteUser(row._id)}>delete</button>
                                <NavLink to={`/updateuser/${row._id}`} className="btn btn-dark btn-sm mx-2">update</NavLink>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {error ? (<div className="alert alert-danger my-4">{error}</div>) : null}
            {success ? (<div className="alert alert-primary my-4">{success}</div>) : null}
        </div>
    );
}

export default CustomizedTables;
