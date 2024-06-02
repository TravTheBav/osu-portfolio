import React from 'react';
import ImageGallery from 'react-image-gallery';

const images = [
    {
        original: 'images/calculator.png',
        description: 'Calculator',
        originalHeight: '450px',
        originalAlt: 'Screenshot of an online calculator.'
    },
    {
        original: 'images/etch-a-sketch.png',
        description: 'Etch-a-Sketch',
        originalHeight: '450px',
        originalAlt: 'Screenshot of a virtual etch-a-sketch.'
    },
    {
        original: 'images/stormgate-1.png',
        description: 'Stormgate Benchmarker home page',
        originalHeight: '450px',
        orignalAlt: 'Screenshot of the home page for Stormgate benchmarker, an app for the video game Stormgate.'
    },
    {
        original: 'images/stormgate-2.png',
        description: 'Stormgate Benchmarker about page',
        originalHeight: '450px',
        originalAlt: 'Screenshot of the about page for Stormgate benchmarker, an app for the video game Stormgate.'
    },
    {
        original: 'images/free-cell.png',
        description: 'Freecell solitaire',
        originalHeight: '450px',
        originalAlt: 'Screenshot of a game of free-cell solitaire.'
    },
    {
        original: 'images/sc2-resource-calculator.jpg',
        description: 'StarCraft 2 resource calculator',
        originalHeight: '450px',
        originalAlt: 'Screenshot of a calculator app used for the video game StarCraft 2.'
    },
    {
        original: 'images/to-do-app.png',
        description: 'To do app',
        originalHeight: '450px',
        originalAlt: 'Screenshot of a an app used to keep track of daily chores and projects.'
    },
    {
        original: 'images/soup-recipe-page.jpg',
        description: 'Recipe webpage',
        originalHeight: '450px',
        originalAlt: 'Screenshot of a recipe page for matzo ball soup.'
    },
    {
        original: 'images/restaurant-page.png',
        description: 'Restaurant SPA',
        originalHeight: '450px',
        originalAlt: 'Screenshot of a restaurant page template using the Kuddly Krab theme from Spongebob.'
    },
    {
        original: 'images/landing-page.jpg',
        description: 'Landing page template',
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
