import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import * as Config from '../config/config';


const GuestRoute = ({ component: Component, ...rest }) => {
	const isAuthenticated = localStorage.getItem(Config.STORAGE_TOKEN);
	return (
		<Route {...rest}
			render={props => !isAuthenticated ? <Component {...props} /> : <Redirect to="/home" />}
		/>
	);
}

export default GuestRoute;