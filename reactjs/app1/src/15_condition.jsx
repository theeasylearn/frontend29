import React from "react";
export default class ConditionalExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = { action: "default" }
    }
    handleClick() {
        console.log("click...");
        if (this.state.action === "default") {
            this.setState({
                action: "like"
            });
        }
        else if (this.state.action === "like") {
            this.setState({
                action: "dislike"
            })
        }
        else if (this.state.action === "dislike") {
            this.setState({
                action: "default"
            })
        }
    }

    render() {
        return (<>
            <div className="col-4 ">
                <div className="card shadow m-5">
                    <div className={this.props.data.tag === "orginal" ? "card-header h2 text-bg-success" : "card-header h2 text-bg-danger"}>
                        {this.props.data.title}
                    </div>
                    <div className="card-body">
                        <img src="https://picsum.photos/500/300" className="img-fluid" alt="" />
                        {this.state.action === "default" ? <img src="image/default.png" className="mt-3" style={{ height: "35px" }} alt="default" onClick={() => this.handleClick()} /> :
                            this.state.action === "like" ? <img src="image/like.png" className="mt-3" style={{ height: "35px" }} alt="default" onClick={() => this.handleClick()} /> : this.state.action === "dislike" ? <img src="image/dislike.png" className="mt-3" style={{ height: "35px" }} alt="default" onClick={() => this.handleClick()} /> : <></>
                        }
                        <div className="mt-3">
                            {
                                this.state.action === "like" ? "like" : this.state.action === "dislike" ? "dislike" : <></>
                            }
                        </div>

                        <div className="text-secondary mt-3">
                            {this.props.data.desc}
                        </div>
                    </div>
                </div>
            </div>
        </>)
    }
}