import React from "react";
export default class MyPost extends React.Component
{
    constructor(props)
    {
        super(props);
        this.title = props.title;
        this.photo = props.photo;
        //create state object
        this.state = {
            count:0
        }
    }
    changeCount()
    {
        //increase state variable count
        this.setState({
            count:this.state.count + 1
        })
    }
    render()
    {
        return (<div className="col-lg-4 col-md-4 col-sm-6 col-12">
            <div className="card shadow">
                <img src={this.photo} className='card-img-top' />
                <div className="card-body d-flex justify-content-between">
                    <h4>{this.title}</h4>
                    <button onClick={() => this.changeCount()} type='button' className='btn btn-primary'>Like {this.state.count}</button>
                </div>
            </div>

        </div>);
    }
}