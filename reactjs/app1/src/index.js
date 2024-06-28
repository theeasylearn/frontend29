import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
function showDateTime() {
    let now = new Date();
    let output = (
        <div className='container'>
            <div className='row'>
                <div className="col-12">
                    <h1>Current Date Time</h1>
                    <table  className='table table-bordered'>
                        <tr>
                            <td>Hour</td>
                            <td>Minute</td>
                            <td>Second</td>
                        </tr>
                        <tr>
                            <td>{now.getHours()}</td>
                            <td>{now.getMinutes()}</td>
                            <td>{now.getSeconds()}</td>
                        </tr>
                        <tr>
                            <td>day</td>
                            <td>month</td>
                            <td>year</td>
                        </tr>
                        <tr>
                            <td>{now.getDate()}</td>
                            <td>{now.getMonth() + 1}</td>
                            <td>{now.getFullYear()}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
    root.render(output);
}
setInterval(showDateTime,1000);