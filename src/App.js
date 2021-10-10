import Layout from "./components/Layout";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import AddUser from './components/AddUser';
import UpdateUser from "./components/UpdateUser";

function App() {
    return (
        <Router>
            <Layout />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/adduser">
                    <AddUser/>
                </Route>
                <Route exact path="/updateuser/:id">
                    <UpdateUser/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;