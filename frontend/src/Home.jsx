import logo from "./flf-logo.png.jpeg";
import { useState } from "react";

function Home() {
  const [formData, setFormData] = useState({
    firstName: "",
    phone: "",
    address: "",
    service: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const selectService = (serviceName) => {
    setFormData({
      ...formData,
      service: serviceName,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch("https://gm-solar-app-1.onrender.com/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      alert("Lead Saved Successfully!");

      setFormData({
        firstName: "",
        phone: "",
        address: "",
        service: "",
        date: "",
        time: "",
      });
    } catch (error) {
      console.log(error);
      alert("Error saving lead");
    }
  };

  return (
    <div style={{ fontFamily: "Arial" }}>
      
      {/* Navbar */}
      <div
        style={{
          backgroundColor: "#0b2c6b",
          padding: "15px 30px",
          display: "flex",
          alignItems: "center",
          gap: "15px",
        }}
      >
        <img
          src={logo}
          alt="Logo"
          style={{
            width: "70px",
            borderRadius: "10px",
          }}
        />

        <h2 style={{ color: "white" }}>
          FLF Solar Services
        </h2>
      </div>

      {/* Hero */}
<div
  style={{
    backgroundImage:
      "linear-gradient(rgba(6,27,58,0.25), rgba(6,27,58,0.25)), url('https://images.unsplash.com/photo-1509391366360-2e959784a276')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white",
    textAlign: "center",
    padding: "120px 20px",
  }}
>

      
      
      
        <h1 style={{ fontSize: "56px", fontWeight: "bold", color: "white" }}>
          Professional Solar Services
        </h1>

        <p style={{ fontSize: "22px" }}>
          More Energy • More Savings • Total Peace of Mind
        </p>
      </div>

      {/* Services */}
      <div
        style={{
          padding: "50px 20px",
          textAlign: "center",
        }}
      >
        <h2>Choose Your Service</h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
            marginTop: "30px",
          }}
        >
          {[
            "Solar Panel Cleaning",
            "System Maintenance",
            "Smart Monitoring",
            "Complete Service Package",
            "Before & After Photos",
            "Basic System Report",
            "Inverter Check",
            "Cable & Connection Review",
          ].map((service) => (
            <div
              key={service}
              onClick={() => selectService(service)}
              style={{
                border:
                  formData.service === service
                    ? "2px solid #facc15"
                    : "1px solid #ccc",

                padding: "25px",
                borderRadius: "15px",
                width: "250px",
                cursor: "pointer",

                backgroundColor:
                  formData.service === service
                    ? "#061b3a"
                    : "white",

                color:
                  formData.service === service
                    ? "white"
                    : "#333",

                fontWeight: "bold",
              }}
            >
              {service}
            </div>
          ))}
        </div>
      </div>

      {/* Form */}
      <div
        style={{
          backgroundColor: "#f5f5f5",
          padding: "60px 20px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "32px", color: "#061b3a", marginBottom: "10px" }}>
      Get Your Free Solar Quote Today
</h2>
<p style={{ color: "#555", marginBottom: "30px" }}>
  Complete the form below and our solar experts will contact you shortly.
</p>

        <form
          onSubmit={handleSubmit}
          style={{
            backgroundColor: "white",
            padding: "35px",
            maxWidth: "520px",
margin: "30px auto",
border: "1px solid #e5e7eb",
boxShadow: "0 12px 35px rgba(0,0,0,0.15)",
            
          
          }}
        >
          <input
            type="text"
            name="firstName"
            placeholder="Full Name"
            value={formData.firstName}
            onChange={handleChange}
            style={{
              width: "90%",
              padding: "12px",
              marginBottom: "15px",
            }}
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            style={{
              width: "90%",
              padding: "12px",
              marginBottom: "15px",
            }}
          />

          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            style={{
              width: "90%",
              padding: "12px",
              marginBottom: "15px",
            }}
          />

          <input
            type="text"
            name="service"
            placeholder="Selected Service"
            value={formData.service}
            readOnly
            style={{
              width: "90%",
              padding: "12px",
              marginBottom: "15px",
              backgroundColor: "#f0f0f0",
            }}
          />

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            style={{
              width: "90%",
              padding: "12px",
              marginBottom: "15px",
            }}
          />

          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            style={{
              width: "90%",
              padding: "12px",
              marginBottom: "15px",
            }}
          />

          <button
            type="submit"
            style={{
              backgroundColor: "#f59e0b",
              color: "white",
              padding: "14px 35px",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Submit Request
          </button>

          <br />
          <br />

          <a
            href="https://wa.me/17869731521"
            target="_blank"
            rel="noreferrer"
          >
            <button
              type="button"
              style={{
                backgroundColor: "#25D366",
                color: "white",
                padding: "12px 25px",
                border: "none",
                borderRadius: "10px",
                cursor: "pointer",
                width: "90%",
                fontSize: "16px",
              }}
            >
              📞 Llamar / WhatsApp Español (786-973-1521)
            </button>
          </a>

          <br />
          <br />

          <a
            href="https://wa.me/13469712966"
            target="_blank"
            rel="noreferrer"
          >
            <button
              type="button"
              style={{
                backgroundColor: "#173b8f",
                color: "white",
                padding: "12px 25px",
                border: "none",
                borderRadius: "10px",
                cursor: "pointer",
                width: "90%",
                fontSize: "16px",
              }}
            >
              📞 Call / WhatsApp English (346-971-2966)
            </button>
          </a>
        </form>
      </div>
    </div>
    


);
  

  

}

export default Home;