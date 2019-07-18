import React from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import Login from './components/Login';

function App() {
  return (
    <div className="App" style={{padding: "30px"}}>
			<div>
				<Link to="/" className="btn" style={{marginRight: "20px", textDecoration: "none"}}>Login</Link>
				<Link to="/profile" className="btn" style={{textDecoration: "none"}}>Profile</Link>
			</div>

			<Route exact path="/" component={Login} />
			<Route exact path="/profile" />
    </div>
  );
}

export default App;
