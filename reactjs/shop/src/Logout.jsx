import React from "react";
import withRouter from './MyHOC';
import { ToastContainer } from "react-toastify";
import { showMessage } from "./message";
class Checkout extends React.Component {
    
    constructor(props)
    {
        super(props);
        this.props.removeCookie('userid');
        showMessage('logout successfull','success');
    }
    componentDidMount()
    {
        this.props.navigate('/userlogin');
    }
    render() 
    {

        return (<>
            <ToastContainer />
        </>);
    }
}
export default withRouter(Checkout);