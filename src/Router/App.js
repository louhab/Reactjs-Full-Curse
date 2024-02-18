import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layouts from './Pages/Layouts';
import Blogs from './Pages/Blogs';
import Contact from './Pages/Contact';
import PageNotFound from './Pages/PageNotFound';
function App(props) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layouts />} />
                <Route path="blog" element={<Blogs />} />
                <Route path="Contact" element={<Contact />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
