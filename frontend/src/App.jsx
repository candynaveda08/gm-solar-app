import { useState } from "react";

function App() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    bill: "",
    service: "",
    date: "",
    time: ""
  });

  const services = [
    "Cleaning & Maintenance",
    "Repairs & Troubleshooting",
    "Battery & Backup",
    "Installation & Reinstallation",
    "Upgrades & Electrical"
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    await fetch("https://gm-solar-app.onrender.com/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    alert("Thank you! We will contact you soon.");
  };
alert("Lead enviado correctamente");


  return (
    <div style={pageStyle}>
      <div style={cardStyle}>
        <h1 style={titleStyle}>FLF Solar</h1>
        <p style={subtitleStyle}>
          Professional solar services for your home or business. Request your free quote in minutes.
        </p>

        <select name="service" onChange={handleChange} style={inputStyle}>
          <option>Select Service</option>
          {services.map((s, i) => <option key={i}>{s}</option>)}
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

        <p style={smallText}>🔒 Your information is safe and secure</p>
      </div>
    </div>
  );
}

const pageStyle = {
  fontFamily: "Arial",
  minHeight: "100vh",
  background: "linear-gradient(135deg, #f6c23e, #0b2a5b)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px"
};

const cardStyle = {
  background: "white",
  padding: "35px",
  borderRadius: "20px",
  width: "450px",
  boxShadow: "0 15px 35px rgba(0,0,0,0.2)",
  textAlign: "center"
};

const titleStyle = {
  fontSize: "34px",
  color: "#0b2a5b",
  marginBottom: "10px",
  fontWeight: "bold"
};

const subtitleStyle = {
  color: "#555",
  fontSize: "15px",
  marginBottom: "20px",
  lineHeight: "1.5"
};

const inputStyle = {
  width: "100%",
  padding: "14px",
  marginBottom: "12px",
  borderRadius: "10px",
  border: "1px solid #ccc",
  fontSize: "15px"
};

const buttonStyle = {
  width: "100%",
  padding: "14px",
  background: "#f6c23e",
  color: "#0b2a5b",
  border: "none",
  borderRadius: "10px",
  fontSize: "16px",
  fontWeight: "bold",
  cursor: "pointer"
};

const smallText = {
  marginTop: "18px",
  fontSize: "13px",
  color: "#777"
};

export default App;
