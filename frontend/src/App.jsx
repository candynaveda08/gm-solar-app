import { useState } from "react";
import Dashboard from "./Dashboard";
import solarImage from "./flf-logo.png.jpeg";
import Home from "./Home";
import Quote from "./Quote";

function App() {
  if (window.location.pathname === "/") {
  return <Home />;
  if (window.location.pathname === "/quote") {
  return <Quote />;
}
}
  if (window.location.pathname === "/dashboard") {
    return <Dashboard />;
  }

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    bill: "",
    service: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    await fetch("https://gm-solar-app.onrender.com/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    alert("Thank you! We will contact you soon.");
  };

  return (
    <div style={pageStyle}>
      <div style={cardStyle}>
        

        <h1 style={titleStyle}>FLF Solar</h1>
        <p style={subtitleStyle}>
          Professional solar services for your home or business.
        </p>

        <select name="service" onChange={handleChange} style={inputStyle}>
          <option>Select Service</option>
          <option>Solar Panel Cleaning</option>
          <option>System Maintenance</option>
          <option>Smart Monitoring</option>
        </select>

        <input name="name" placeholder="Full Name" onChange={handleChange} style={inputStyle} />
        <input name="phone" placeholder="Phone Number" onChange={handleChange} style={inputStyle} />
        <input name="address" placeholder="Home Address" onChange={handleChange} style={inputStyle} />
        <input name="bill" placeholder="Monthly Electric Bill $" onChange={handleChange} style={inputStyle} />
        <input type="date" name="date" onChange={handleChange} style={inputStyle} />
        <input type="time" name="time" onChange={handleChange} style={inputStyle} />

        <button onClick={handleSubmit} style={buttonStyle}>
          Get My Free Solar Quote
        </button>
      </div>
    </div>
  );
}

const pageStyle = {
  minHeight: "100vh",
  background: "linear-gradient(to right, #d4a017, #0b2c6b)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "30px",
};

const cardStyle = {
  background: "white",
  padding: "25px",
  borderRadius: "22px",
  width: "430px",
  boxShadow: "0 15px 40px rgba(0,0,0,0.25)",
};

const imageStyle = {
  width: "100%",
  borderRadius: "18px",
  marginBottom: "20px",
};

const titleStyle = {
  textAlign: "center",
  color: "#0b2c6b",
};

const subtitleStyle = {
  textAlign: "center",
  color: "#555",
};

const inputStyle = {
  width: "100%",
  padding: "14px",
  marginBottom: "12px",
  borderRadius: "10px",
  border: "1px solid #ccc",
  fontSize: "15px",
};

const buttonStyle = {
  width: "100%",
  padding: "15px",
  background: "#f4b400",
  color: "#0b2c6b",
  border: "none",
  borderRadius: "10px",
  fontWeight: "bold",
  fontSize: "16px",
};

export default App;