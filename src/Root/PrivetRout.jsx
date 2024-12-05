import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types'

const PrivetRout = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    if(loading){
        return (
            <div className="flex items-center justify-center h-[90vh]">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        )
    }
    if(user){
        return children;
    }
    return <Navigate to='/login'></Navigate>
};

PrivetRout.propTypes ={
    children : PropTypes.node
}

export default PrivetRout;