// src/Components/CardData.jsx
import React from 'react';
import Cards from './Cards';

const data = [
  {
    icon: 'bi-window',
    title: 'Fully Responsive',
    description: 'This theme will look great on any device, no matter the size!'
  },
  {
    icon: 'bi-layers',
    title: 'Bootstrap 5 Ready',
    description: 'Featuring the latest build of the new Bootstrap 5 framework!'
  },
  {
    icon: 'bi-terminal',
    title: 'Easy to Use',
    description: 'Ready to use with your own content, or customize the source files!'
  }
];

function CardData() {
  return (
    <section className="features-icons bg-light text-center">
      <div className="container">
        <div className="row">
          {data.map((item, index) => (
            <Cards
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CardData;