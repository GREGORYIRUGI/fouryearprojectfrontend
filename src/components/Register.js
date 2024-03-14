import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const handleRegister = () => {
    // Your login logic goes here
    fetchData()

    // Assuming the login is successful, navigate to the home page
    navigate('/login'); // Redirect to the home page
  };
  const navigate = useNavigate();

  const [passwordMatchError, setPasswordMatchError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const fetchData = async() => {

    try {
      const {email,password,username} =formData
      const requestOptions = {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({email,password,username})
      };
      console.log("sending data")
      const response = await fetch('http://127.0.0.1:8000/api/user_reg/',requestOptions);
      const data = await response.json;
      console.log(data.error)
      console.log('Form submitted:', formData);
      // Reset the form after submission
      // handleLogin();
    }
    catch (error){
      console.error('Authentication failed',error.message)
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the passwords match
    if (formData.password !== formData.confirmPassword) {
      setPasswordMatchError('Passwords do not match');
      return;
    }

    handleRegister();


    // Clear any previous error messages
    setPasswordMatchError('');

    // Add your signup logic here using the formData state
    console.log('Form submitted:', formData);

    // Reset the form after submission
    setFormData({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Sign Up</h2>
      <form style={styles.form} onSubmit={handleSubmit}>
        <label style={styles.label}>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </label>
        <label style={styles.label}>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </label>
        <label style={styles.label}>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </label>
        <label style={styles.label}>
          Confirm Password:
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </label>
        {passwordMatchError && (
          <p style={styles.errorText}>{passwordMatchError}</p>
        )}
        <button type="submit" style={styles.button}>
          Register
        </button>
      </form>
      <p style={styles.loginLink}>
        Already have an account? <a href="/login" style={{color:'darkturquoise'}}>Login</a>
      </p>
    </div>
  );
};

const styles = {
  container: {
    width: '300px',
    margin: 'auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    marginTop: '10px',
    color:'rgb(165, 247, 71)'
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
    color:'rgb(165, 247, 71)'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '10px',
    display: 'flex',
    flexDirection: 'column',
    color:'rgb(165, 247, 71)',
  },
  input: {
    padding: '8px',
    marginBottom: '15px',
  },
  button: {
    padding: '10px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
  },
  loginLink: {
    textAlign: 'center',
    marginTop: '10px',
  },
  errorText: {
    color: 'red',
    marginBottom: '10px',
  },
};

export default Register;
