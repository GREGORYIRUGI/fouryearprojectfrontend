import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [formData, setFormData] = useState({

    email: '',
    password: '',

  });
  const [error,  setError] = useState(false)

  useEffect(() => {
    if (error) {
      // Set a timeout to clear the error after 5 seconds
      setTimeout(() => {
        setError(false);
      }, 5000);
    }
  }, [error]);

  const handleLogin = () => {
    // Your login logic goes here

    // Assuming the login is successful, navigate to the home page
    navigate('/home'); // Redirect to the home page
  };

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const fetchData = async() =>{
    try {
      const {email,password} =formData
      const requestOptions = {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({email,password})
      };
      console.log("sending data")
      const response = await fetch('http://127.0.0.1:8000/api/auth_token/',requestOptions);
      const data = await response.json();
      const auth = data.access_token;
      
      console.log(auth)
      // setToken(data.access_token);
      if (auth && auth.length > 1) { // Check if auth is not null/undefined and its length is greater than 1
          handleLogin(); // Call handleLogin function
      } else setError(true)

      console.log(data.error)
      console.log('Form submitted:', formData);
      // Reset the form after submission
     
    }
    catch (error){
      console.error('Authentication failed',error.message)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
   
   
    fetchData()
    // Add your signup logic here using the formData state
    // if (token.length>1){
    //   handleLogin();

    // }

    setFormData({
      username: '',
      email: '',
      password: '',
      
    });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Log In</h2>
      <form style={styles.form} onSubmit={handleSubmit}>
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
        <button type="submit" style={styles.button}>
          Login
        </button>
      </form>
      <p style={styles.loginLink}>
        Don't have an account? <a href="/register" style={{color:'darkturquoise'}}>Register</a>
      </p>{
        error ? <p style={{color:'red'}}> incorrect log in data</p>: <p></p>
      }
    </div>
  );
};

const styles = {
  container: {
    width: '300px',
    margin: 'auto',
    padding: '20px',
    marginTop: '50px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    color:'rgb(165, 247, 71)'
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '10px',
    display: 'flex',
    flexDirection: 'column',
    marginTop:'10px',
    color:'rgb(165, 247, 71)'
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
};

export default Login;
