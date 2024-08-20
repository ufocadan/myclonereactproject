import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProductSection from './components/ProductSection';
import LoginForm from './components/LoginForm';
import './App.css';

function App() {
  // State to control visibility of the login form
  const [isLoginVisible, setIsLoginVisible] = useState(false);

  // Function to handle the "Giriş Yap" button click
  const handleLoginClick = () => {
      setIsLoginVisible(!isLoginVisible); // Toggle visibility
  };

  return (
      <div className="App">
          <header className="App-header">
            <Navbar />
            <button onClick={handleLoginClick} className="btn btn-primary">Giriş Yap</button>
            <HeroSection />
            <ProductSection />
              {/* Add your Navbar or other components here */}
              
          </header>
          <main>
              {/* Conditionally render the login form */}
              {isLoginVisible && <LoginForm />}
          </main>
      </div>
  );
}

export default App;
