import React from 'react';
// import '@fancyapps/fancybox/dist/fancybox.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
// import '@fancyapps/fancybox';

const images = [
    { src: 'https://ik.imagekit.io/apm2002/Photos/Wedding/Wed%201.jpg?updatedAt=1723875061821', alt: 'photo' },
    { src: 'https://ik.imagekit.io/apm2002/Photos/Wedding/Wed%202.jpg?updatedAt=1723875068814', alt: 'photo' },
    { src: 'https://ik.imagekit.io/apm2002/Photos/Wedding/Wed%203.jpg?updatedAt=1723875075058', alt: 'photo' },
    { src: 'https://ik.imagekit.io/apm2002/Photos/Wedding/Wed%204.jpg?updatedAt=1723875081371', alt: 'photo' },
    { src: 'https://ik.imagekit.io/apm2002/Photos/Wedding/Wed%205.jpg?updatedAt=1723875086633', alt: 'photo' },
    { src: 'https://ik.imagekit.io/apm2002/Photos/Wedding/Wed%2013.jpg?updatedAt=1723875131428', alt: 'photo' },
    { src: 'https://ik.imagekit.io/apm2002/Photos/Wedding/Wed%2014.jpg?updatedAt=1723875136762', alt: 'photo' },
    { src: 'https://ik.imagekit.io/apm2002/Photos/Wedding/Wed%2018.jpg?updatedAt=1723875158297', alt: 'photo' },
    { src: 'https://ik.imagekit.io/apm2002/Photos/Wedding/Wed%2027.jpg?updatedAt=1723875207212', alt: 'photo' },
    { src: 'https://ik.imagekit.io/apm2002/Photos/Wedding/Wed%2019.jpg?updatedAt=1723875163331', alt: 'photo' },
    { src: 'https://ik.imagekit.io/apm2002/Photos/Wedding/Wed%2020.jpg?updatedAt=1723875168942', alt: 'photo' },
    { src: 'https://ik.imagekit.io/apm2002/Photos/Wedding/Wed%2040.jpg?updatedAt=1723875274707', alt: 'photo' },
    { src: 'https://ik.imagekit.io/apm2002/Photos/Wedding/Wed%2015.jpg?updatedAt=1723875142322', alt: 'photo' },
    { src: 'https://ik.imagekit.io/apm2002/Photos/Wedding/Wed%2032.jpg?updatedAt=1723875232352', alt: 'photo' },
    { src: 'https://ik.imagekit.io/apm2002/Photos/Wedding/Wed%2033.jpg?updatedAt=1723875237902', alt: 'photo' },
    { src: 'https://ik.imagekit.io/apm2002/Photos/Wedding/Wed%2034.jpg?updatedAt=1723875242956', alt: 'photo' },
    { src: 'https://ik.imagekit.io/apm2002/Photos/Wedding/Wed%2035.jpg?updatedAt=1723875248452', alt: 'photo' },
    { src: 'https://ik.imagekit.io/apm2002/Photos/Wedding/Wed%2036.jpg?updatedAt=1723875253408', alt: 'photo' },
    { src: 'https://ik.imagekit.io/apm2002/Photos/Wedding/Wed%2028.jpg?updatedAt=1723875212326', alt: 'photo' },
    { src: 'https://ik.imagekit.io/apm2002/Photos/Wedding/Wed%2029.jpg?updatedAt=1723875217191', alt: 'photo' },
    { src: 'https://ik.imagekit.io/apm2002/Photos/Wedding/Wed%2030.jpg?updatedAt=1723875222325', alt: 'photo' },
    { src: 'https://ik.imagekit.io/apm2002/Photos/Wedding/Wed%2031.jpg?updatedAt=1723875227461', alt: 'photo' },
    { src: 'https://ik.imagekit.io/apm2002/Photos/Wedding/Wed%2016.jpg?updatedAt=1723875147855', alt: 'photo' },
    { src: 'https://ik.imagekit.io/apm2002/Photos/Wedding/Wed%2017.jpg?updatedAt=1723875152785', alt: 'photo' },
    { src: 'https://ik.imagekit.io/apm2002/Photos/Wedding/Wed%206.jpg?updatedAt=1723875092595', alt: 'photo' },
    { src: 'https://ik.imagekit.io/apm2002/Photos/Wedding/Wed%207.jpg?updatedAt=1723875098008', alt: 'photo' },
    { src: 'https://ik.imagekit.io/apm2002/Photos/Wedding/Wed%208.jpg?updatedAt=1723875104003', alt: 'photo' },
    { src: 'https://ik.imagekit.io/apm2002/Photos/Wedding/Wed%209.jpg?updatedAt=1723875109277', alt: 'photo' },
    { src: 'https://ik.imagekit.io/apm2002/Photos/Wedding/Wed%2010.jpg?updatedAt=1723875114914', alt: 'photo' },
    { src: 'https://ik.imagekit.io/apm2002/Photos/Wedding/Wed%2011.jpg?updatedAt=1723875120656', alt: 'photo' },
    { src: 'https://ik.imagekit.io/apm2002/Photos/Wedding/Wed%2012.jpg?updatedAt=1723875126181', alt: 'photo' },
    { src: 'https://ik.imagekit.io/apm2002/Photos/Wedding/Wed%2021.jpg?updatedAt=1723875174961', alt: 'photo' },
    { src: 'https://ik.imagekit.io/apm2002/Photos/Wedding/Wed%2022.jpg?updatedAt=1723875180557', alt: 'photo' },
  
    { src: 'https://ik.imagekit.io/apm2002/Photos/Wedding/Wed%2023.jpg?updatedAt=1723875186084', alt: 'photo' },
    { src: 'https://ik.imagekit.io/apm2002/Photos/Wedding/Wed%2024.jpg?updatedAt=1723875191265', alt: 'photo' },
    { src: 'https://ik.imagekit.io/apm2002/Photos/Wedding/Wed%2025.jpg?updatedAt=1723875196470', alt: 'photo' },
    { src: 'https://ik.imagekit.io/apm2002/Photos/Wedding/Wed%2026.jpg?updatedAt=1723875202070', alt: 'photo' },
    { src: 'https://ik.imagekit.io/apm2002/Photos/Wedding/Wed%2037.jpg?updatedAt=1723875258893', alt: 'photo' },
    { src: 'https://ik.imagekit.io/apm2002/Photos/Wedding/Wed%2038.jpg?updatedAt=1723875264223', alt: 'photo' },
    { src: 'https://ik.imagekit.io/apm2002/Photos/Wedding/Wed%2039.jpg?updatedAt=1723875269543', alt: 'photo' },
   
];


const Wedding = () => {
    return (
        <div className="container">
            <h2 className="section__header">Wedding Photos</h2>
            <div className="service__card">
                <p>Click on the photos to start slide show.</p>
            </div>
            <div className="container-fluid">
                <div className="row mt-4">
                    {images.map((image, index) => (
                        <div className="item col-sm-3 col-md-3 col-3 mb-3 responsive" key={index}>
                            <a href={image.src} className="fancybox" data-fancybox="gallery1">
                                <img src={image.src} alt={image.alt} width="50%" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Wedding;
