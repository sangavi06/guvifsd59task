import React from 'react';
import '../Style/Testimonials.css'; // Ensure the path is correct

const Testimonial = ({ image, name, feedback }) => {
    return (
        <div className="col-lg-4">
            <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                <img className="img-fluid rounded-circle mb-3 testimonial-image" src={image} alt={name} />
                <h3>{name}</h3>
                <h5 className="font-weight-light mb-0">"{feedback}"</h5>
            </div>
        </div>
    );
}

export default Testimonial;