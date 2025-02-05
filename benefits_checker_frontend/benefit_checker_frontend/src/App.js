import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: "",
    income: "",
    familySize: "",
    location: "",
  });

  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:8080/api/check", formData, {
        headers: {
          'Content-Type': 'application/json'
        },
      });
      setResponse(res.data);
    } catch (error) {
      console.error("Error details:", {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status
      });
      setResponse(`Error: ${error.response?.data || error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="form-card">
        <h2>Scottish Benefit Checker</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-group">
              <label>Name</label>
              <input 
                type="text" 
                name="name" 
                placeholder="Enter your full name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
              />
            </div>

            <div className="form-group">
              <label>Annual Income</label>
              <input 
                type="number" 
                name="income" 
                placeholder="Enter your annual income" 
                value={formData.income} 
                onChange={handleChange} 
                required 
              />
            </div>

            <div className="form-group">
              <label>Family Size</label>
              <input 
                type="number" 
                name="familySize" 
                placeholder="Number of family members" 
                value={formData.familySize} 
                onChange={handleChange} 
                required 
              />
            </div>

            <div className="form-group">
              <label>Location</label>
              <input 
                type="text" 
                name="location" 
                placeholder="Enter your city/state" 
                value={formData.location} 
                onChange={handleChange} 
                required 
              />
            </div>
          </div>

          <button 
            type="submit" 
            className={loading ? 'loading' : ''}
            disabled={loading}
          >
            {loading ? 'Checking Eligibility...' : 'Check Eligibility'}
          </button>
        </form>

        {response && (
          <div className="response">
            <h3>Results:</h3>
            <p>{response}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;