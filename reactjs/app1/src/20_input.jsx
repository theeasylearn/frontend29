import { useState } from "react"
export default function InputExample() {
    const [teamData, setTeamData] = useState([]);
    const [name, setName] = useState();
    const [color, setColor] = useState();
    const [trophy, setTrophy] = useState();

    const handleSubmit = (e) => {
        console.log("name : ", name);
        console.log("color : ", color);
        console.log("trophy : ", trophy);
        setTeamData([...teamData, { name: name, color: color, trophy: trophy }]);
        console.log("teamData ", teamData);
        e.preventDefault();
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-8 offset-2">
                        <div className="card mt-5 shadow">
                            <div className="card-header h2 text-center text-bg-success">Add Teams </div>
                            <div className="card-body">
                                <form action="" onSubmit={(e) => handleSubmit(e)}>
                                    <div className="form-group">
                                        <label htmlFor="" className="form-label">Enter your team name</label>
                                        <input type="text" className="form-control" name="team" id="team" placeholder="Team name goes here" onChange={(e) => setName(e.target.value)} />
                                    </div>
                                    <div className="form-group mt-3">
                                        <label htmlFor="" className="form-label">Select Team color </label>
                                        <select name="color" id="color" className="form-select" onChange={(e) => setColor(e.target.value)} >
                                            <option value="text-bg-danger">Red </option>
                                            <option value="text-bg-primary">Blue</option>
                                            <option value="text-bg-success">Green</option>
                                            <option value="text-bg-warning">Yellow</option>
                                            <option value="text-bg-dark">Black</option>
                                            <option value="text-bg-info">Sky Blue</option>
                                        </select>
                                    </div>
                                    <div className="form-group mt-3">
                                        <label htmlFor="" className="form-label">
                                            Select number of trophies won
                                        </label>
                                        <select name="trophy" id="trophy" className="form-select"
                                            onChange={(e) => setTrophy(e.target.value)}>
                                            <option value="0">0</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
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
                <div className="row">
                    {teamData.map((value) => {
                        return <div className="col-4">
                            <div className="card my-3 shadow">
                                <div className={value.color + " card-header h3 text-center "}>{value.name}</div>
                                <div className="card-body">
                                    {Array().fill(0, 5).map(() => {
                                        return <img src="image/trophy.gif" style={{ height: "50px" }} alt="" />
                                    })}
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </>
    )
}