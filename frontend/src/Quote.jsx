import { useState } from "react";

function Quote() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    service: "",
    comments: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const clients =
      JSON.parse(localStorage.getItem("clients")) || [];

    clients.push(form);

    localStorage.setItem(
      "clients",
      JSON.stringify(clients)
    );

    alert("Client Registered Successfully!");

    setForm({
      firstName: "",
      lastName: "",
      phone: "",
      address: "",
      service: "",
      comments: ""
    });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(to right, #0f2c6e, #d4a017)"
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          background: "white",
          padding: "40px",
          borderRadius: "20px",
          width: "400px"
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "20px"
          }}
        >
          Free Solar Quote
        </h1>

        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={form.firstName}
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={form.lastName}
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
          placeholder="Address"
          value={form.address}
          onChange={handleChange}
          style={inputStyle}
        />

        <select
          name="service"
          value={form.service}
          onChange={handleChange}
          style={inputStyle}
        >
          <option value="">Select Service</option>
          <option>Solar Panel Cleaning</option>
          <option>System Maintenance</option>
          <option>Smart Monitoring</option>
          <option>Battery Installation</option>
          <option>Complete Service</option>
        </select>

        <textarea
          name="comments"
          placeholder="Comments"
          value={form.comments}
          onChange={handleChange}
          style={{
            ...inputStyle,
            height: "100px"
          }}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "15px",
            background: "#f4b400",
            border: "none",
            borderRadius: "10px",
            fontWeight: "bold",
            cursor: "pointer"
          }}
        >
          Get Free Quote
        </button>
      </form>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  borderRadius: "10px",
  border: "1px solid #ccc"
};

export default Quote;