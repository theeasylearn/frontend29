import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
class Course extends React.Component
{
    constructor(props)
    {
        super(props); 
        //create property variable
        this.name = props.name;
        this.fees = props.fees;
        this.topics = props.topics;
        this.duration = props.duration;
    }
    render()
    {
        return (<div className="col-lg-4">
            <div className="card shadow">
                <div className="card-header">
                    <h3>{this.name}</h3>
                </div>
                <div className="card-body">
                    <ul className='list-group'>
                        <li className='list-group-item'>Duration {this.duration}</li>
                        <li className='list-group-item'>Fees {this.fees}</li>
                        <li className='list-group-item'>Topics {this.topics}</li>
                    </ul>
                </div>
            </div>
        </div>)
    }
}
class Page extends React.Component
{
    render()
    {
        return (
            <div className='container'>
                <div className="row">
                    <div className="col-12">
                        <h1>Web development in 2024</h1>
                        <p>Web development in 2024 is characterized by increased emphasis on performance, accessibility, and user experience. The widespread adoption of AI-driven tools and frameworks has streamlined the development process, enabling more efficient coding, testing, and deployment. Progressive Web Apps (PWAs) and single-page applications (SPAs) continue to dominate, offering seamless, app-like experiences in browsers. Additionally, Web3 technologies, such as blockchain integration and decentralized applications (dApps), are gaining traction, paving the way for new business models and enhanced security. The focus on responsive design and cross-platform compatibility remains crucial, ensuring that websites provide optimal experiences across diverse devices and screen sizes.</p>
                    </div>
                </div>
                <div className="row">
                    <Course name='React js' fees='15000' duration='6 Months' topics='Reactjs Nodejs Express mysql' />
                    <Course name='UI UX' fees='25000' duration='5 Months' topics='Photoshop adobe Illustrator, Figma' />
                    <Course name='Python' fees='25000' duration='8 Months' topics='Python, Django, Machine Learning' />
                </div>
            </div>
        )
    }
}
root.render(<Page />); //calling page