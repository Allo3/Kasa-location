import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logementsData from './assets/data/location.json';
import Home from './pages/Home';
import Header from './components/Header';
import ErrorPage from './pages/Error/Error';
import Footer from './components/Footer/footer';
import About from './pages/About/about';
import LocationPage from './pages/Location/Location';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/location/:id" element={<LocationPage logements={logementsData} />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
            <Footer />
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);
