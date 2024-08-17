// src/App.jsx
import React from 'react';
import CardData from './Components/CardData';
import Header from './Components/Header';
import Showcase from './Components/Showcase';
import TestimonialData from './Components/TestimonialData';
import SignUp from './Components/SignUp';
import Footer from './Components/Footer';


function App() {
  return (
    <div className='container'>
      <Header/>
     {/* Card*/}
      <CardData/>
      
      {/* Image Showcases */}
      <Showcase/>
      
      
      {/* Testimonials */}
      <TestimonialData/>

      
      {/* Call to Action */}
         <SignUp/>
      
      {/* Footer */}
        <Footer/>
    </div>
  );
}

export default App;