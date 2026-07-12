import logo from "./flf-logo.png";
import { useState } from "react";
import Navbar from "./Navbar";


function Home() {
  const isMobile = window.innerWidth <= 768;
  const [formData, setFormData] = useState({
    firstName: "",
    phone: "",
    email: "",
    address: "",
    service: "",
    date: "",
    time: "",
  });
  const [isSaving, setIsSaving] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

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
    if (isSaving) return;
    setIsSaving(true);

    try {
      await fetch("https://gm-solar-app-1.onrender.com/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      setSuccessMessage("Request sent successfully!");

      setFormData({
        firstName: "",
        phone: "",
        email: "",
        address: "",
        service: "",
        date: "",
        time: "",
      });
      setIsSaving(false);
    } catch (error) {
      
      console.log(error);
      alert("Error saving lead");
    }
  };

  return (
    <div style={{ fontFamily: "Arial" }}>
      
      <Navbar />
      

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

      
      
      
        <h1
  style={{
    fontSize: "clamp(26px, 6vw, 52px)",
    fontWeight: "bold",
    color: "white",
    lineHeight: "1.25",
padding: "0 15px",
  }}
>
  Professional Solar Services
</h1>

        <p style={{ fontSize: "22px" }}>
          More Energy • More Savings • Total Peace of Mind
        </p>
      </div>

      {/* Services */}
      <div
        style={{
  padding: "70px 60px",
  textAlign: "center",
  maxWidth: "1200px",
  margin: "60px auto",
  backgroundColor: "#ffffff",
  border: "1px solid #e5e7eb",
  borderRadius: "30px",
  boxShadow: "0 15px 40px rgba(0,0,0,0.08)",
}}
      >
        <div style={{ marginBottom: "35px" }}>
  <p
    style={{
      color: "#e8b200",
      fontWeight: "bold",
      marginBottom: "8px",
      textTransform: "uppercase",
      letterSpacing: "1.5px",
      fontSize: "14px",
    }}
  >
    OUR SERVICES
  </p>

  <h2
    style={{
      fontSize: isMobile ? "28px" : "36px",
      color: "#0b1f3a",
      margin: 0,
    }}
  >
    Choose the Right Solar Service
  </h2>

  <p
    style={{
      color: "#666",
      maxWidth: "600px",
      margin: "12px auto 0",
      lineHeight: "1.6",
    }}
  >
    Professional maintenance and support designed to keep your solar system working efficiently.
  </p>
</div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "repeat(2, 160px)" : "repeat(3, 260px)",
            rowGap: "24px",
            columnGap: isMobile ? "22px" : "24px",
            justifyContent: "center",
            justifyItems: "center",
            justifyContent: "center",
            marginTop: "30px",
            justifyItems: "center",
            placeContent: "center",
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
            "Free Estimate",
          ].map((service) => (
            <div
              key={service}
              onClick={() => selectService(service)}
              style={{
                border:
                  formData.service === service
                    ? "2px solid #facc15"
                    : "1px solid #ccc",

                
                padding: isMobile ? "18px" : "30px",
                borderRadius: "20px",
                width: isMobile ? "145px" : "220px",
                maxWidth: "220px",
                minWidth: isMobile ? "145px" : "220px",
                cursor: "pointer",
                boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
                transition: "all 0.3s ease",
                textAlign: "center",

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
              <>
  <div style={{ fontSize: "38px", marginBottom: "12px" }}>
  {service === "Solar Panel Cleaning"
    ? "🧽"
    : service === "System Maintenance"
    ? "🛠️"
    : service === "Smart Monitoring"
    ? "📱"
    : service === "Complete Service Package"
    ? "📦"
    : service === "Before & After Photos"
    ? "📸"
    : service === "Basic System Report"
    ? "📋"
    : service === "Inverter Check"
? "⚡"
: service === "Cable & Connection Review"
? "🔌"
: service === "Free Estimate"
? "💲"
: "☀️"}
</div>
  <div>{service}</div>
</>
            </div>
          ))}
        </div>
      </div>


      
      
      <div id="quote-form"
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
            padding: isMobile ? "22px" : "35px",
            maxWidth: isMobile ? "95%" : "950px",
margin: "40px auto",
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
  type="email"
  name="email"
  placeholder="Email Address"
  value={formData.email}
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
            disabled={isSaving}
            style={{
              backgroundColor: "#f59e0b",
              color: "white",
              padding: "18px 55px",
              minWidth: "280px",
              minHeight: "55px",
              border: "none",
              borderRadius: "12px",
              cursor: "pointer",
              fontSize: "18px",
              fontWeight: "bold",
              boxShadow: "0 6px 15px rgba(245,158,11,0.35)",
              transition: "all 0.3s ease",
            }}
          >
            {isSaving ? "Sending Request..." : "Request a Free Quote"}
          </button>
          {successMessage && (
  <p
    style={{
      color: "#16a34a",
      marginTop: "15px",
      fontWeight: "bold",
      textAlign: "center",
    }}
  >
    ✅ {successMessage}
  </p>
)}

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