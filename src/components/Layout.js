import './../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';

function Layout() {
    return (
        <div className="col-md-12 m-auto">
            <nav className="navbar navbar-expand-lg navbar-light bg-primary px-4">
                <a className="navbar-brand" href="/">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/adduser">Add User</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/updateuser/1">Update User</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Layout;