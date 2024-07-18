import React from "react";
export default class EventExample extends React.Component {
    constructor(props) {
        super(props);
    }

    handleSubmit(event, email, password) {
        event.preventDefault();
        console.log("form submitted ");
        console.log("email : ", email);
        console.log("password : ", password);

        if (number === 0){
            //true 
        } 
        else
        {
            //false 
        }
    }

    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-6 offset-3 mt-5">
                            <div className="card shadow mt-5">
                                <div className="card-header h2 text-bg-success text-center">
                                    Login
                                    { number === 0 ? console.log("true") : console.log("false ") }
                                </div>
                                <div className="card-body">
                                    <form action="" onSubmit={(event) => this.handleSubmit(event, "iamparam102@gmail.com", 987987)}>
                                        <div className="form-group">
                                            <label className="form-label" htmlFor="email">
                                                Enter your email address
                                            </label>
                                            <input type="email" className="form-control" placeholder="Email goes here" id="email" name="email" />
                                        </div>
                                        <div className="form-group mt-3">
                                            <label className="form-label" htmlFor="password">
                                                Enter your password
                                            </label>
                                            <input type="password" className="form-control" placeholder="password goes here" id="password" name="password" />
                                        </div>
                                        <div className="text-center mt-3">
                                            <button type="submit" className="btn btn-success"> Login</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
