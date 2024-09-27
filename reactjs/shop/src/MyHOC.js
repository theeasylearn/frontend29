import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie'; // Import useCookies

// Higher Order Component
const withRouter = (Component) => {
    return (props) => {
        let params = useParams();
        let navigate = useNavigate();
        let [cookies, setCookie, removeCookie] = useCookies('theasylearn'); // Use cookies

        // Pass params, navigate, and cookies to the wrapped component as props
        return (
            <Component 
                {...props} 
                params={params} 
                navigate={navigate} 
                cookies={cookies} 
                setCookie={setCookie} 
                removeCookie={removeCookie}
            />
        );
    };
};

export default withRouter;
