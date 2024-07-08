import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
class Page extends React.Component
{
    render()
    {
        return (
            <div className='container'>
                <div className="row">
                    <div className="col-12">
                        <h1>example of class Component</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda blanditiis vitae maiores sapiente, placeat, vel fugit aliquam ratione ad labore asperiores corrupti incidunt inventore! Consectetur voluptates molestias aspernatur dicta similique?</p>
                    </div>
                </div>
            </div>
        )
    }
}
root.render(<Page />); //calling page