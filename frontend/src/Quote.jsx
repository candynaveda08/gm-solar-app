import { useState } from "react";

function Quote() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    service: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("https://gm-solar-app-1.onrender.com/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        alert("Quote request saved successfully!");
        setForm({
          name: "",
          phone: "",
          address: "",
          service: "",
          date: "",
          time: "",
        });
      } else {
        alert("Error saving request");
      }
    } catch (error) {
      alert("Error connecting to server");
    }
  };

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Free Solar Quote</h1>

      <input name="name" placeholder="Full Name" value={form.name} onChange={handleChange} />
      <br /><br />

      <input name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} />
      <br /><br />

      <input name="address" placeholder="Address" value={form.address} onChange={handleChange} />
      <br /><br />

      <select name="service" value={form.service} onChange={handleChange}>
        <option value="">Select Service</option>
        <option>Solar Panel Cleaning</option>
        <option>Battery Installation</option>
        <option>System Maintenance</option>
      </select>
      <br /><br />

      <input name="date" type="date" value={form.date} onChange={handleChange} />
      <br /><br />

      <input name="time" type="time" value={form.time} onChange={handleChange} />
      <br /><br />

      <button onClick={handleSubmit}>Submit Quote</button>
    </div>
  );
}

export default Quote;