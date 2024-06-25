import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
var num1 = 30;
var num2 = 4;
var result = (<>
    <h1 className='myHeading'>Expression in reactjs</h1> <hr/>
    <ul className='myList'>
        <li>num1 = {num1}</li>
        <li>num2 = {num2}</li>
        <li>Addition = {num1 + num2}</li>
        <li>Subtraction = {num1 - num2}</li>
        <li>Multiplication = {num1 * num2}</li>
        <li>Division = {num1/num2}</li>
    </ul>
</>)
root.render(result);