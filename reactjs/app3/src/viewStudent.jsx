import { useParams } from "react-router-dom";

function ViewStudent() {

    const { name, age } = useParams();

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-6 offset-3">
                        <div className="card my-5 shadow">
                            <div className={age >= 18 ? "card-header h2 text-bg-primary" : "card-header h2 text-bg-danger"}>
                                {name}
                            </div>
                            <div className="card-body">
                                age : {age}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
export default ViewStudent;