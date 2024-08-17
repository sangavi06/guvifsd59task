import React from 'react';
import Testimonial from './Testimonial';
import '../Style/Testimonials.css'; // Assuming you have a CSS file for testimonials

const testimonialsData = [
    {
        image: 'https://doorwaytomexico.com/wp-content/uploads/2021/03/Testimonials-girl-scaled.jpg',
        name: 'Margaret E.',
        feedback: 'This is fantastic! Thanks so much guys!'
    },
    {
        image: 'https://neweraindia.com/wp-content/uploads/2022/09/300-EV983086.jpg',
        name: 'Fred S.',
        feedback: 'Bootstrap is amazing. I\'ve been using it to create lots of super nice landing pages.'
    },
    {
        image: 'https://images.pexels.com/photos/4855373/pexels-photo-4855373.jpeg?cs=srgb&dl=pexels-cottonbro-4855373.jpg&fm=jpg',
        name: 'Sarah W.',
        feedback: 'Thanks so much for making these free resources available to us!'
    }
];

const TestimonialData = () => {
    return (
        <section className="testimonials text-center bg-light">
            <div className="container">
                <h2>What people are saying...</h2>
                <div className="row">
                    {testimonialsData.map((testimonial, index) => (
                        <Testimonial
                            key={index}
                            image={testimonial.image}
                            name={testimonial.name}
                            feedback={testimonial.feedback}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TestimonialData;