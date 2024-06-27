import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
//create object
let hours = new Date().getHours();
//below function conditional jsx expression
function getMessage(hours)
{
    if(hours>=6 && hours<=12)
        return <h3>Good Morning {hours}</h3>
    else if(hours>=13 && hours<=17)
        return <h3>Good Afternoon {hours}</h3>    
    else if(hours>=18 && hours<=24)
        return <h3>Good Evening {hours}</h3>
    else 
        return <h3>Hello</h3>
}
function showMessage(hours)
{
    return (
        <div className='container'>
            <div className="row">
                <div className="col-12">
                    <h1>Conditional Statement in Reactjs</h1>
                    <hr />
                    {getMessage(hours)}
                </div>
            </div>
        </div>
    )
}
root.render(showMessage(hours));