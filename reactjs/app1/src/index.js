import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
//create object
let player = {
    name:'Virat Kohli',
    age:34,
    run:35000,
    century:85,
    average:55.22
}
//create function
function showPlayer(player)
{
    //return jsx
    return (
        <div className='container'>
            <div className="row">
                <div className="col-lg-3">
                    <div className="card">
                        <div className="card-header text-bg-info">
                            <h3>{player.name}</h3>
                        </div>
                        <div className="card-body">
                            <ul className='list-group'>
                                <li className='list-group-item'>age {player.age}</li>
                                <li className='list-group-item'>Run {player.run}</li>
                                <li className='list-group-item'>Century {player.century}</li>
                                <li className='list-group-item'>Average {player.average}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
root.render(showPlayer(player));