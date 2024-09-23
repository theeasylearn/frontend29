//hoc means Higher order component
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// Higher Order Component
const withRouter = (Component) => {
    return (props) => {
        const params = useParams();
        const navigate = useNavigate();

        // Pass params and navigate to the wrapped component as props
        return <Component {...props} params={params} navigate={navigate} />;
    };
};

export default withRouter;
