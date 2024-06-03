// Import dependencies
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Components, styles, media
import GlobalNav from './components/GlobalNav';
import './App.css';

// Import pages you have completed:
// Home, Topics, Gallery, Contact, and Staff Pages
// ---------------------------------------------------
// import ProductData from './data/products';
import HomePage from './pages/HomePage';
import TopicsPage from './pages/TopicsPage';
// import ContactsPage from './pages/ContactPage'; 
import GalleryPage from './pages/GalleryPage';
import OrderPage from './pages/OrderPage';
import StaffPage from './pages/StaffPage';

import MatchesPage from './pages/MatchesPage';

// If your schema requires SHORT data input, then use the TABLE design.
import EditMatchPageTable from './pages/EditMatchPageTable';
import AddMatchPageTable from './pages/AddMatchPageTable';

// Define the function that renders the content in Routes, using State.
function App() {

  const [match, setMatchToEdit] = useState([])

  return (
    <>
      <BrowserRouter>

          <header>
            <i><img src='/android-chrome-192x192.png' alt="Travis Zito Logo"/></i>
            <h1>Travis Zito - Portfolio</h1>
          </header>

          <GlobalNav />

          <main>
            <section>
              <Routes> 
                  {/* Add Routes for Home, Topics, Gallery, Contact, and Staff Pages.  */}
                  
                  <Route path="/" element={<HomePage />} />
                  <Route path="/topics" element={<TopicsPage />} />
                  <Route path="/matches" element={<MatchesPage setMatch={setMatchToEdit}/>} />
                  {/* <Route path="/contacts" element={<ContactsPage />} /> */}
                  <Route path="/gallery" element={<GalleryPage />} /> 
                  <Route path="/order" element={<OrderPage />} />
                  <Route path="/staff" element={<StaffPage />} />
               
                  {/* Use these if your schema requires LONG data input: */}
                  <Route path="/create" element={<AddMatchPageTable />} /> 
                  <Route path="/update" element={<EditMatchPageTable matchToEdit={match} />} />
              </Routes>
            </section>
          </main>

          <footer>
            <p>&copy; 2024 Travis Zito</p>
          </footer>

      </BrowserRouter>
    </>
  );
}

export default App;