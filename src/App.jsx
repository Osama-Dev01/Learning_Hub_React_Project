import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Import components
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import HeroBelowSection from './components/HeroBelowSection';
import FeaturedCourses from './components/FeaturedCourses';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import NotFound from './components/NotFound';

function AppContent() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <div className="app">
      {!isLoginPage && <Header />}
      
      <Routes>
        {/* Home Page Route */}
        <Route 
          path="/" 
          element={
            <>
              <Hero />
              <HeroBelowSection />
              <FeaturedCourses />
            </>
          } 
        />
        
        {/* Login Route */}
        <Route path="/login" element={<Login />} />
        
        {/* Dashboard Route */}
        <Route path="/dashboard" element={<Dashboard />} />
        
        {/* 404 Not Found Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      
      {!isLoginPage && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;