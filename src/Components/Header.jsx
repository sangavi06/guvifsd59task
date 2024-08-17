import React, { useState } from 'react';
import '../Style/Header.css'; // Ensure the path to your CSS file is correct

const Header = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        // For now, we'll just set the isSubmitted state to true
        setIsSubmitted(true);
    };

    return (
        <div>
            {/* Navigation */}
            <nav className="navbar navbar-light bg-light static-top">
                <div className="container">
                    <a className="navbar-brand" href="#!">Start Bootstrap</a>
                    <a className="btn btn-primary" href="#signup">Sign Up</a>
                </div>
            </nav>

            {/* Masthead */}
            <header className="masthead">
                <div className="container position-relative">
                    <div className="row justify-content-center">
                        <div className="col-xl-6">
                            <div className="text-center text-white">
                                <h1 className="mb-5">Generate more leads with a professional landing page!</h1>
                                <form className="form-subscribe" id="contactForm" data-sb-form-api-token="API_TOKEN" onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col">
                                            <input
                                                className="form-control form-control-lg"
                                                id="emailAddress"
                                                type="email"
                                                placeholder="Email Address"
                                                data-sb-validations="required,email"
                                                data-sb-can-submit="no"
                                            />
                                            <div className="invalid-feedback text-white" data-sb-feedback="emailAddress:required">
                                                Email Address is required.
                                            </div>
                                            <div className="invalid-feedback text-white" data-sb-feedback="emailAddress:email">
                                                Email Address is not valid.
                                            </div>
                                        </div>
                                        <div className="col-auto">
                                            <button className="btn btn-warning btn-lg" id="submitButton" type="submit">
                                                Submit
                                            </button>
                                        </div>
                                    </div>
                                    {isSubmitted && (
                                        <div className="text-center mb-3">
                                            <div className="fw-bolder">Form submission successful!</div>
                                            <p>To activate this form, sign up at</p>
                                            <a className="text-white" href="https://startbootstrap.com/solution/contact-forms">
                                                https://startbootstrap.com/solution/contact-forms
                                            </a>
                                        </div>
                                    )}
                                    <div className="d-none" id="submitErrorMessage">
                                        <div className="text-center text-danger mb-3">Error sending message!</div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;