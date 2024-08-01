import { useState } from "react"
import { Link } from "react-router-dom";
export default function AddStudent() {

    let [name, setName] = useState("");
    let [age, setAge] = useState("");

    const handleSubmit = (e) => {
        console.log("name : ", name);
        console.log("age : ", age);

        e.preventDefault();
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-6 offset-3">
                        <div className="card my-5 shadow">
                            <div className="card-header text-bg-success h2">
                                Add Student
                            </div>
                            <div className="card-body">
                                <form action="">
                                    <div className="form-group">
                                        <label htmlFor="" className="form-label">
                                            Enter your name
                                        </label>
                                        <input type="text" name="name" className="form-control" placeholder="Enter your name here" onChange={(e) => setName(e.target.value)} />
                                    </div>
                                    <div className="form-group mt-3">
                                        <label htmlFor="" className="form-label">
                                            Enter your age
                                        </label>
                                        <input type="number" name="age" className="form-control" placeholder="Enter your age here" onChange={(e) => setAge(e.target.value)} />
                                    </div>
                                    <div className="text-end mt-3">
                                        <Link to={`/view-student/${name}/${age}`} type="button" className="btn btn-success" >
                                            Submit
                                        </Link>
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