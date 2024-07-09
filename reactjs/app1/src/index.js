import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
class MyPost extends React.Component
{
    constructor(props)
    {
        super(props);
        this.title = props.title;
        this.photo = props.photo;
    }
    render()
    {
        return (<div className="col-lg-4 col-md-4 col-sm-6 col-12">
            <div className="card shadow">
                <img src={this.photo} className='card-img-top' />
                <div className="card-body d-flex justify-content-between">
                    <h4>{this.title}</h4>
                    <button type='button' className='btn btn-primary'>Like</button>
                </div>
            </div>

        </div>);
    }
}
class Page extends React.Component
{
    render()
    {
        return(<div className='container'>
            <div className='row'>
                <MyPost title='My First Business Innogration' photo='https://picsum.photos/300?random=2' />
               
                <MyPost title='My First visit to france' photo='https://picsum.photos/300?random=3' />
            </div>
        </div>);
    }
}
root.render(<Page />); //calling page