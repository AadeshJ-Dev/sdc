import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import * as Config from '../config/config';

const UserRoute = ({ component: Component, ...rest }) => {
	const isAuthenticated = localStorage.getItem(Config.STORAGE_TOKEN);

	return (
		<Route {...rest}
			render={props => isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />}
		/>
	);
}

export default UserRoute;