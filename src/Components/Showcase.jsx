import React from 'react';
import ShowcaseItem from './showcaseItem';

const showcaseData = [
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTA-obWlH-YQUxufT-9c7WqTqjuTtSTI61nQ&s',
        orderClass: 'order-lg-2',
        title: 'Fully Responsive Design',
        description: 'When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it\'s a phone, tablet, or desktop the page will behave responsively!'
    },
    {
        image: 'https://1.bp.blogspot.com/-G5J7kLSz8YY/XtY-bTC3X5I/AAAAAAAAAh4/jLokDsDeiFQsbAtymxMCaElw9Qlx8OkfgCNcBGAsYHQ/s1600/bootstrap-illustration.png',
        orderClass: '',
        title: 'Updated For Bootstrap 5',
        description: 'Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!'
    },
    {
        image: 'https://ifvodnews.tv/wp-content/uploads/2023/04/main-qimg-e3d5278719a216c74b7dff8e90eed435-pjlq.jpeg',
        orderClass: 'order-lg-2',
        title: 'Easy to Use & Customize',
        description: 'Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!'
    }
];

const Showcase = () => {
    return (
        <section className="showcase">
            <div className="container-fluid p-0">
                {showcaseData.map((item, index) => (
                    <ShowcaseItem
                        key={index}
                        image={item.image}
                        orderClass={item.orderClass}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </div>
        </section>
    );
}

export default Showcase;