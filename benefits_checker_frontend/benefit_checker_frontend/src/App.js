import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [formData, setFormData] = useState({
    name: "",
    income: "",
    familySize: "",
    location: "",
  });

  const [response, setResponse] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
    }
  };

  return (
    <div style={{ padding: "20px" , maxWidth: "400px", margin: "0 auto" }}>
      <h2>Benefit Checker</h2>
      <form onSubmit={handleSubmit}>
        <input type= "text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input type= "number" name="income" placeholder="Income" value={formData.income} onChange={handleChange} required />
        <input type= "number" name="familySize" placeholder="Family Size" value={formData.familySize} onChange={handleChange} required />
        <input type= "text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} required />
        <button type="submit">Check Eligibility</button>
      </form>
      {response && <p>Response: {response}</p>}
    </div>
  );
}

export default App;