import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layouts from './Pages/Layouts';
import Blogs from './Pages/Blogs';
import Contact from './Pages/Contact';
import PageNotFound from './Pages/PageNotFound';
import './GlobalStyle.scss'
function AppOfRouter() {
    return (
        <BrowserRouter>
            <h1 className="title">all route is here</h1>
            <Routes>
                <Route path="/" element={<Layouts />} />
                <Route path="blog" element={<Blogs />} />
                <Route path="Contact" element={<Contact />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppOfRouter;
