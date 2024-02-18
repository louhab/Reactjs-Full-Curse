import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layouts from './Pages/Layouts';
import Blogs from './Pages/Blogs';
import Contact from './Pages/Contact';

function App(props) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layouts />} />
                <Route path="blog" element={<Blogs />} />
                <Route path="Contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
