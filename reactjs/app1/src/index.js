import React from 'react';
import ReactDOM from 'react-dom/client';
class DinningTable extends React.Component {
    // 1) initilization stage
    constructor(props) {
        super(props);
        console.log('constructor is called...');
        //create constant variables
        
        //create property variable
        this.name = props.name;
        this.tableno = props.tableno;

        //create state variable 
        this.state = {
            thali: 0,
            ras: 0,
            roti: 0,
            papad: 0,
            chas: 0,
            total:0
        }
    }
    //2) growth stage
    componentWillMount()
    {
        console.log('component will mount method is called....')
    }
    
    componentDidMount()
    {
        console.log('component did mount method is called....');
    }
    shouldComponentUpdate(nextProp,nextState)
    {
        console.log('shouldComponentUpdate called...');
        if(nextState.thali >= 5)
            return false;
        else 
            return true;
    }

    componentWillUpdate()
    {
        console.log('component Will Update called...');
    }

    componentDidUpdate()
    {
        console.log('component did Update called...');

    }
    changeThali()
    {
        // this.state.thali = this.state.thali + 1; wrong way 
        //correct way
        this.setState({
            thali: this.state.thali + 1
        });
    }
    changeRas()
    {
        this.setState({
            ras: this.state.ras + 1
        })
    }
    changeRoti()
    {
        this.setState({
            roti: this.state.roti + 1
        });
    }
    changeChas()
    {
        this.setState({
            chas:this.state.chas + 1
        });
    }
    changePapad()
    {
        this.setState({
            papad:this.state.papad + 1
        });
    }
    render() {
        console.log('render method is called...');
        return (<div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
            <div className="card shadow">
                <div className="card-header text-bg-primary d-flex justify-content-between">
                    <h5>{this.tableno}</h5>
                    <h5>{this.name} </h5>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-12">
                            <button onClick={() => this.changeThali()} type="button" className="btn btn-danger w-100">Thali <span className="badge text-bg-light">{this.state.thali}</span>
                            </button>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col">
                            <button onClick={() => this.changeRas()} type="button" className="btn btn-warning w-100">Ras <span className="badge text-bg-light">{this.state.ras}</span></button>
                        </div>
                        <div className="col">
                            <button onClick={() => this.changeRoti()} type="button" className="btn btn-success w-100">Roti <span className="badge text-bg-light">{this.state.roti}</span></button>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col">
                            <button onClick={() => this.changeChas()} type="button" className="btn btn-secondary w-100">Chas <span className="badge text-bg-light">{this.state.chas}</span></button>
                        </div>
                        <div className="col">
                            <button onClick={()=> this.changePapad()} type="button" className="btn btn-dark w-100">Papad <span className="badge text-bg-light">{this.state.papad}</span></button>
                        </div>
                    </div>
                </div>
                <div className="card-footer">
                    Rs 1500
                </div>
            </div>
        </div>)
    }
}
class Page extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<div className="container-fluid">
            <div className="row">
                <DinningTable name='Kushal Shah' tableno='1' />
                <DinningTable name='Dhurvin Tejani' tableno='2' />
                <DinningTable name='Keyur Lakhani' tableno='3' />

            </div>
        </div>);
    }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Page />); //calling page