import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

function UpdateUser() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const { id } = useParams();

    useEffect(() => {
        const getUser = async () => {
            const response = await axios.get(`${url}/${id}`);
            const user = response.data.user;
            setUsername(user.username);
            setEmail(user.email);
            setMobile(user.mobile);
        }
        getUser();
    },[id]);

    const formData = {
        username,
        email,
        mobile
    }

    console.log(formData);

    const url = 'http://localhost:5000/user';

    const formHandler = async (e) => {
        e.preventDefault();
        await axios.put(`${url}/${id}`, formData)
            .then(() => {
                setSuccess('user updated successfully');
                setError('');
            })
            .catch((err) => {
                setError(err.message);
                setSuccess('');
            });
    }

    return (
        <div className="col-md-4 m-auto py-5">
            <h3 className="py-3 bg-primary px-4 my-4 color-white">update user</h3>
            <form onSubmit={formHandler}>
                <div className="form-group">
                    <input
                        type="text"
                        value={username}
                        className="form-control"
                        id="exampleInputEmail1"                        
                        placeholder="Enter username"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <br />
                <div className="form-group">
                    <input
                        type="email"
                        value={email}
                        className="form-control"
                        id="exampleInputEmail1"                        
                        placeholder="Enter email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <br />
                <div className="form-group">
                    <input
                        type="text"
                        value={mobile}
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Mobile"
                        onChange={(e) => setMobile(e.target.value)}
                    />
                </div>
                <br />
                <button type="submit" className="btn btn-primary">update</button>
            </form>
            {error ? (<div className="alert alert-danger my-4">{error}</div>) : null}
            {success ? (<div className="alert alert-primary my-4">{ success }</div>) : null }
        </div>
    )
}

export default UpdateUser;