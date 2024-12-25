
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {

    const { user } = useAuth()
    const location = useLocation();

    if (!user) {
        return <Navigate state={{ from: location.pathname }} to="/signIn"></Navigate>
    }
    return children
};


PrivateRoute.propTypes = {
    children: PropTypes.object,
}


export default PrivateRoute;