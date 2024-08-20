import React, { useState } from 'react';
import './LoginForm.css'; // Import any CSS styles if needed

function LoginForm() {
    // State to handle input values
    const [identityNo, setIdentityNo] = useState('');
    const [phone, setPhone] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleIdentityNoChange = (e) => setIdentityNo(e.target.value);
    const handlePhoneChange = (e) => setPhone(e.target.value);

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Replace with your API endpoint
        const apiUrl = 'https://api.example.com/api/v1/users/123';

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    identityNo,
                    phone,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                // Handle success (e.g., redirect to another page or update UI)
                console.log('Login successful', data);
            } else {
                // Handle errors (e.g., display an error message)
                setErrorMessage(data.message || 'Login failed. Please try again.');
            }
        } catch (error) {
            // Handle network errors
            setErrorMessage('An error occurred. Please try again later.');
            console.error('Error:', error);
        }
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
                                    minLength="10"
                                    type="tel"
                                    name="tc-or-tax-no-input"
                                    autoComplete="off"
                                    value={identityNo}
                                    onChange={(e) => setIdentityNo(e.target.value)}
                                    className="input__native"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="input phone-input mb-4">
                    <div className="input__wrapper">
                        <div className="input__area">
                            <div className="input__area__inner">
                                <label htmlFor="phoneInput" className="input__label">Cep Telefonu</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    autoComplete="tel"
                                    id="phoneInput"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    className="input__native"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <button type="submit" className="ml-auto login-register-form__submitButton button app-button app-button--default app-button--sm">
                    <span className="app-button__title">
                        Giriş Yap / Üye Ol
                    </span>
                </button>
            </form>
        </div>
    );
}

export default LoginForm;
