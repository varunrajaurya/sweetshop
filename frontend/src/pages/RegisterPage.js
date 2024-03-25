import React from 'react';
// import RegistrationForm from '../components/RegistrationForm';
import RegistrationForm from '../components/Rgistration';

const RegisterPage = () => {
    const handleRegister = async formData => {
        try {
            const response = await fetch('http://localhost:5000/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                console.log('Registration successful');
                // Optionally, redirect to another page upon successful registration
            } else {
                const errorData = await response.json();
                console.error('Registration failed:', errorData.msg);
            }
        } catch (error) {
            console.error('Registration failed:', error.message);
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <RegistrationForm onRegister={handleRegister} />
        </div>
    );
};

export default RegisterPage;
