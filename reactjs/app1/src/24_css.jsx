import React from "react";
import "./style/style1.css";
export default class CssExample extends React.Component {

    render() {
        return (
            <>
                <h1 align="center">Hello world </h1>
                <div>
                    <div className="myP">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia ipsa asperiores rem culpa, corporis vel natus delectus vero architecto repellendus eius optio exercitationem odio, ea adipisci quis illum. Facilis, voluptas.</p>
                    </div>
                    <div className="myP">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia ipsa asperiores rem culpa, corporis vel natus delectus vero architecto repellendus eius optio exercitationem odio, ea adipisci quis illum. Facilis, voluptas.</p>
                    </div>
                    <div className="myP">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia ipsa asperiores rem culpa, corporis vel natus delectus vero architecto repellendus eius optio exercitationem odio, ea adipisci quis illum. Facilis, voluptas.</p>
                    </div>
                </div>

            </>
        )
    }
}