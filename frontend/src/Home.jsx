function Home() {
  return (
    <div style={pageStyle}>
      <div style={heroStyle}>
        <h1 style={titleStyle}>FLF Solar</h1>

        <p style={subtitleStyle}>
          Professional Solar Services For Your Home & Business
        </p>

        <button
          style={buttonStyle}
          onClick={() => (window.location.href = "/quote")}
        >
          Get Free Quote
        </button>
      </div>

      <div style={servicesContainer}>
        <div style={cardStyle}>
          <h2>☀️ Solar Panel Cleaning</h2>
          <p>
            Keep your solar panels efficient and producing maximum energy.
          </p>
        </div>

        <div style={cardStyle}>
          <h2>🔋 Battery Installation</h2>
          <p>
            Reliable backup battery systems for your home and business.
          </p>
        </div>

        <div style={cardStyle}>
          <h2>⚡ Smart Monitoring</h2>
          <p>
            Monitor your solar production and system performance in real time.
          </p>
        </div>
      </div>
    </div>
  );
}

const pageStyle = {
  minHeight: "100vh",
  background: "linear-gradient(to right, #0f2c6e, #d4a017)",
  padding: "40px",
  color: "white",
  fontFamily: "Arial"
};

const heroStyle = {
  textAlign: "center",
  marginBottom: "60px"
};

const titleStyle = {
  fontSize: "70px",
  marginBottom: "10px"
};

const subtitleStyle = {
  fontSize: "24px",
  marginBottom: "30px"
};

const buttonStyle = {
  padding: "18px 40px",
  borderRadius: "12px",
  border: "none",
  background: "#f4b400",
  fontSize: "22px",
  fontWeight: "bold",
  cursor: "pointer"
};

const servicesContainer = {
  display: "flex",
  justifyContent: "center",
  gap: "20px",
  flexWrap: "wrap"
};

const cardStyle = {
  background: "white",
  color: "#0f2c6e",
  padding: "30px",
  borderRadius: "20px",
  width: "300px",
  textAlign: "center",
  boxShadow: "0 10px 20px rgba(0,0,0,0.2)"
};

export default Home;