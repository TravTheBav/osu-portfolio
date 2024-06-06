import React from 'react';
import ImageGallery from 'react-image-gallery';

const images = [
    {
        original: 'images/calculator.png',
        description: <a href="https://travthebav.github.io/calculator/" target='_blank'>Calculator</a>,
        originalHeight: '450px',
        originalAlt: 'Screenshot of an online calculator.'
    },
    {
        original: 'images/etch-a-sketch.png',
        description: <a href="https://travthebav.github.io/Etch-a-Sketch/" target='_blank'>Etch-a-Sketch</a>,
        originalHeight: '450px',
        originalAlt: 'Screenshot of a virtual etch-a-sketch.'
    },
    {
        original: 'images/stormgate-1.png',
        description: <a href="https://sheltered-brushlands-58989-ec9853216420.herokuapp.com/" target='_blank'>Stormgate Benchmarker home page</a>,
        originalHeight: '450px',
        orignalAlt: 'Screenshot of the home page for Stormgate benchmarker, an app for the video game Stormgate.'
    },
    {
        original: 'images/stormgate-2.png',
        description: <a href="https://sheltered-brushlands-58989-ec9853216420.herokuapp.com/" target='_blank'>Stormgate Benchmarker about page</a>,
        originalHeight: '450px',
        originalAlt: 'Screenshot of the about page for Stormgate benchmarker, an app for the video game Stormgate.'
    },
    {
        original: 'images/free-cell.png',
        description: <a href="https://github.com/TravTheBav/freecell" target='_blank'>Freecell solitaire</a>,
        originalHeight: '450px',
        originalAlt: 'Screenshot of a game of free-cell solitaire.'
    },
    {
        original: 'images/sc2-resource-calculator.jpg',
        description: <a href="https://sc2resourcecalculator.com/" target='_blank'>StarCraft 2 resource calculator</a>,
        originalHeight: '450px',
        originalAlt: 'Screenshot of a calculator app used for the video game StarCraft 2.'
    },
    {
        original: 'images/to-do-app.png',
        description: <a href="https://travthebav.github.io/to-do-app/" target='_blank'>To-Do app</a>,
        originalHeight: '450px',
        originalAlt: 'Screenshot of a an app used to keep track of daily chores and projects.'
    },
    {
        original: 'images/soup-recipe-page.jpg',
        description: <a href="https://travthebav.github.io/matzo-soup-recipe/" target='_blank'>Recipe webpage</a>,
        originalHeight: '450px',
        originalAlt: 'Screenshot of a recipe page for matzo ball soup.'
    },
    {
        original: 'images/restaurant-page.png',
        description: <a href="https://travthebav.github.io/restaurant-page/" target='_blank'>Restaurant SPA</a>,
        originalHeight: '450px',
        originalAlt: 'Screenshot of a restaurant page template using the Kuddly Krab theme from Spongebob.'
    },
    {
        original: 'images/landing-page.jpg',
        description: <a href="https://travthebav.github.io/landing_page/" target='_blank'>Landing page template</a>,
        originalHeight: '450px',
        originalAlt: 'Screenshot of a landing page template with pictures of a grey cat.'
    }
]

function GalleryPage() {
    return (
        <>
        <ImageGallery items={images} showBullets={true} showFullscreenButton={false} />
        </>
    );
}

export default GalleryPage;
