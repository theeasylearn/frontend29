// hook 
import { useState } from "react"
export default function Register() {

    const [name, setName] = useState();
    const [mobile, setMobile] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = (e) => {
        console.log("name : ", name);
        console.log("mobile : ", mobile);
        console.log("email : ", email);
        console.log("password : ", password);
        e.preventDefault();
    }
    
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-6 offset-3">
                        <div className="card mt-5 shadow">
                            <div className="card-header h2 text-bg-primary text-center">
                                Register
                            </div>
                            <div className="card-body">
                                <form action="" onSubmit={(e) => handleSubmit(e)}>
                                    <div className="form-group">
                                        <label htmlFor="name" className="form-label">
                                            Enter your name
                                        </label>
                                        <input type="text" id="name" name="name" className="form-control" required placeholder="Name goes here " onChange={(e) => setName(e.target.value)} />
                                    </div>
                                    <div className="form-group mt-3">
                                        <label htmlFor="mobile" className="form-label">
                                            Enter your phone number
                                        </label>
                                        <input type="tel" id="mobile" name="mobile" className="form-control" required placeholder="mobile number goes here " onChange={(e) => setMobile(e.target.value)} />
                                    </div>
                                    <div className="form-group mt-3">
                                        <label htmlFor="email" className="form-label">
                                            Enter your email
                                        </label>
                                        <input type="email" id="email" name="email" className="form-control" required placeholder="email goes here " onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                    <div className="form-group mt-3">
                                        <label htmlFor="password" className="form-label">
                                            Enter your password
                                        </label>
                                        <input type="password" id="password" name="password" className="form-control" required placeholder="password goes here " onChange={(e) => setPassword(e.target.value)
                                        } />
                                    </div>
                                    <div className="text-end mt-3">
                                        <button type="submit" className="btn btn-success mx-3">Submit</button>
                                        <button type="reset" className="btn btn-danger">Clear all</button>
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