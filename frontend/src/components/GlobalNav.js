import React from 'react';
import { Link } from 'react-router-dom';

// Change the function names and links
// to fit your portfolio topic.

function GlobalNav() {
  return (
    <nav>
        {/* Add links to Home, Topics, Gallery, Contact, and Staff Pages  */}
        <Link to="/">Home</Link>
        <Link to="../topics">Topics</Link>
        <Link to="../matches">Matches</Link>
        {/* <Link to="../contacts">Contact</Link> */}
        <Link to="../gallery">Gallery</Link>
        <Link to="../order">Order</Link>
        <Link to="../staff">Staff</Link>
    </nav>
  );
}

export default GlobalNav;
