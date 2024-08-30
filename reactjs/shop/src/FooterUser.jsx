import React from "react";

export default class FooterUser extends React.Component {
    render() {
        return (
            <footer className="footer" style={{ "padding": "20px" }}>
                <div className="container">
                    <div className="col-md-12 text-center">
                        <span className="small text-muted">
                            © 2022
                            <span id="copyright">
                                -
                            </span>
                            FreshCart eCommerce HTML Template. All rights reserved. Powered by
                            <a href="#">frontend Devloper</a>
                            .
                        </span>
                    </div>
                </div>
            </footer>
        );
    }
}