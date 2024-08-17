import React from 'react';

const Footer = () => {
    return (
        <footer className="footer bg-light" style={{padding:"30px"}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 h-100 text-center text-lg-start my-auto">
                        <ul className="list-inline mb-2">
                            <li className="list-inline-item"><a href="#!"><h5>About</h5></a></li>
                            <li className="list-inline-item">⋅</li>
                            <li className="list-inline-item"><a href="#!"><h5>Contact</h5></a></li>
                            <li className="list-inline-item">⋅</li>
                            <li className="list-inline-item"><a href="#!"><h5>Terms of Use</h5></a></li>
                            <li className="list-inline-item">⋅</li>
                            <li className="list-inline-item"><a href="#!"><h5>Privacy Policy</h5></a></li>
                        </ul>
                        <h5 className="text-muted small mb-4 mb-lg-0">© Your Website 2023. All Rights Reserved.</h5>
                    </div>
                    <div className="col-lg-6 h-100 text-center text-lg-end my-auto">
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item me-4">
                                <a href="#!"><i className="bi bi-facebook fs-3"></i></a>
                            </li>
                            <li className="list-inline-item me-4">
                                <a href="#!"><i className="bi bi-twitter fs-3"></i></a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#!"><i className="bi bi-instagram fs-3"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;