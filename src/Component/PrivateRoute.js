import { Route, Redirect } from 'react-router-dom';
const PrivateRoute = ({ isAuthenticated, ...props }) => {
    if (!isAuthenticated) {
        return <Redirect to="/SignLogin" />;
    }

    return <Route {...props} />;
};

export default PrivateRoute;