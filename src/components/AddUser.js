import axios from "axios";
import { useState } from "react";

function AddUser() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const formData = {
        username,
        email,
        mobile
    }

    const url = 'http://localhost:5000/user';

    const formHandler = async (e) => {
        e.preventDefault();
        await axios.post(url, formData)
            .then(() => {
                setSuccess('user added successfully');
                setError('');
            })
            .catch((err) => {
                setError(err.message);
                setSuccess('');
            });
    }

    return (
        <div className="col-md-4 m-auto py-5">
            <h3 className="py-3 bg-primary px-4 my-4 color-white">add user</h3>
            <form onSubmit={ formHandler }>
                <div className="form-group">                    
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        name="username"
                        placeholder="Enter username"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <br/>
                <div className="form-group">                    
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        name="email"
                        placeholder="Enter email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <br/>
                <div className="form-group">                    
                    <input
                        type="text"
                        name="mobile"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Mobile"
                        onChange={(e) => setMobile(e.target.value)}
                    />
                </div>
                <br/>
                <button type="submit" className="btn btn-primary">Submit</button>
                {error ? (<div className="alert alert-danger my-4">{error}</div>) : null}
                {success ? (<div className="alert alert-primary my-4">{ success }</div>) : null }
            </form>
        </div>
    );
}

export default AddUser;