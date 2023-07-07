import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logementsData from './assets/data/location.json';
import Home from './components/pages/Home';
import Header from './components/Header';
import ErrorPage from './components/error/Error';
import Footer from './components/Footer/footer';
import About from './components/pages/About/about';
import LocationPage from './components/pages/Location/location';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/location/:id" element={<LocationPage logements={logementsData} />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
            <Footer />
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);
