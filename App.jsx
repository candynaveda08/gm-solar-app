import { useState } from "react";
import Dashboard from "./Dashboard";

function App() {
  const [form, setForm] = useState({
    service: "",
    name: "",
    phone: "",
    address: "",
    bill: "",
    date: "",
    time: "",
    notes: "",
  });
  const [showDashboard, setShowDashboard] = useState(false);
  if (showDashboard) {
    return <Dashboard />;
    }


  const services = [
    "Cleaning & Maintenance",
    "Repairs & Troubleshooting",
    "Battery & Backup",
    "Installation & Reinstallation",
    "Upgrades & Electrical",
  ];

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      await fetch("http://localhost:5000/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      alert("Thank you! One of our solar specialists will contact you shortly.");

      setForm({
        service: "",
        name: "",
        phone: "",
        address: "",
        bill: "",
        date: "",
        time: "",
      });
    } catch (error) {
      console.error(error);
      alert("Error sending data.");
    }
  };

  const pageStyle = {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #f6c343, #3b82f6)",
    fontFamily: "Arial, sans-serif",
    padding: "20px",
  };

  const cardStyle = {
    background: "white",
    padding: "30px",
    borderRadius: "18px",
    width: "360px",
    boxShadow: "0 15px 35px rgba(0,0,0,0.25)",
    textAlign: "center",
  };

  const inputStyle = {
    width: "100%",
    padding: "12px",
    marginBottom: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "14px",
    boxSizing: "border-box",
  };

  const buttonStyle = {
    width: "100%",
    padding: "13px",
    background: "#f4b400",
    border: "none",
    borderRadius: "8px",
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: "15px",
  };

  const smallText = {
    marginTop: "12px",
    fontSize: "12px",
    color: "#666",
  };

  return (
    <div style={pageStyle}>
      <div style={cardStyle}>
        <h1 style={{ marginBottom: "8px" }}>FLF Solar</h1>

        <p style={{ color: "#555", marginBottom: "20px" }}>
          Professional solar services for your home or business.
        </p>

        <select
          name="service"
          value={form.service}
          onChange={handleChange}
          style={inputStyle}
        >
          <option value="">Select Service</option>
          {services.map((service, index) => (
            <option key={index} value={service}>
              {service}
            </option>
          ))}
        </select>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          type="text"
          name="address"
          placeholder="Home Address"
          value={form.address}
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          type="text"
          name="bill"
          placeholder="Monthly Electric Bill $"
          value={form.bill}
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          type="time"
          name="time"
          value={form.time}
          onChange={handleChange}
          style={inputStyle}
        />
        <textarea
  placeholder="Customer Notes"
  value={form.notes}
  onChange={(e) => setForm({ ...form, notes: e.target.value })}
  style={{
    width: "100%",
    padding: "14px",
    marginTop: "15px",
    borderRadius: "10px",
    border: "1px solid #ccc"
  }}
  />


        <button onClick={handleSubmit} style={buttonStyle}>
          Get My Free Solar Quote. 
        </button>
        <button onClick={() => setShowDashboard(true)} style={buttonStyle}>
  View Leads Dashboard
</button>

        <p style={smallText}>🔒 Your information is safe and secure</p>
      </div>
    </div>
  );
}

export default App;