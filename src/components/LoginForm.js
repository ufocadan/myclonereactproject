import React, { useState } from 'react';
import './LoginForm.css'; // Import any CSS styles if needed

function LoginForm() {
    const [tcOrTaxNo, setTcOrTaxNo] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const apiUrl = `https://jsonplaceholder.typicode.com/posts?userId=${tcOrTaxNo}&phone=${phone}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      // Display the JSON response in the message box
      setMessage(JSON.stringify(data, null, 2));
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const goToMainPage = () => {
    window.location.href = 'index.html';
  };

    return (
        <div className="login-register-form">
            <form autocomplete="off" className="form login-register-form__inner" onSubmit={handleSubmit}>
                <div className="title step-form-title mb-3">
                    <div className="font-weight-semi-bold default">
                        <h1>Sigortam.net’e Hoş Geldin!</h1>
                    </div>
                </div>
                <div className="title step-form-subtitle mb-5">
                    <div>Giriş yapmak veya üye olmak için aşağıdaki alanları doldurabilirsin.</div>
                </div>
                <div className="input tc-tax-input mb-4">
          <div className="input__wrapper">
            <div className="input__area">
              <div className="input__area__inner">
                <label htmlFor="identityNoInput" className="input__label">TC Kimlik No veya Vergi No</label>
                <input
                  id="identityNoInput"
                  maxLength="11"
                  minLength="1"
                  type="tel"
                  name="tc-or-tax-no-input"
                  autocomplete="off"
                  value={tcOrTaxNo}
                  onChange={(e) => setTcOrTaxNo(e.target.value)}
                  className="input__native"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="input phone-input">
          <div className="input__wrapper">
            <div className="input__area">
              <div className="input__area__inner">
                <label htmlFor="phoneInput" className="input__label">Cep Telefonu</label>
                <input
                  type="tel"
                  name="phone"
                  autocomplete="tel"
                  id="phoneInput"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="input__native mb-4"
                />
              </div>
            </div>
          </div>
        </div>
        <button type="submit" className="ml-auto login-register-form__submitButton button app-button app-button--default app-button--sm">
          Giriş Yap / Üye Ol
        </button>
      </form>
      
      {/* Message Box */}
      <div id="messageBox" style={{
        display: message ? 'block' : 'none',
        height: '200px', // Set a fixed height
        width: '500px', // Set a fixed width
        overflowY: 'scroll', // Enable vertical scrolling
        overflowX: 'hidden', // Disable horizontal scrolling
        border: '1px solid #ccc', // Optional: Add a border for better visibility
        padding: '10px', // Add some padding
        marginTop: '20px' // Add some space above the box
      }}>
        <pre>{message}</pre>
      </div>

      <button onClick={goToMainPage}>Ana Sayfaya Dön</button>
    </div>
    );
}

export default LoginForm;
