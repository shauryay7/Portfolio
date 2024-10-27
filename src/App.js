// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import NavBar from './components/NavBar';
import Experience from './components/Experience'; // Import the new component
import Skills from './components/Skills'; // Import the new component
import Projects from './components/Projects'; // Import the new component
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Hero />
                <About />
                <NavBar />
                {/* Use Routes for navigation */}
                <Routes>
                    <Route path="/experience" element={<Experience />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/projects" element={<Projects />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;