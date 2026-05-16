function Navbar() {
  return (
    <div style={navStyle}>
      <h2 style={logoStyle}>FLF Solar</h2>

      <div>
        <button style={buttonStyle} onClick={() => (window.location.href = "/")}>
          Home
        </button>

        <button style={buttonStyle} onClick={() => (window.location.href = "/quote")}>
          Get Quote
        </button>

        <button style={buttonStyle} onClick={() => (window.location.href = "/dashboard")}>
          Dashboard
        </button>
      </div>
    </div>
  );
}

const navStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "15px 40px",
  background: "#0f2c6e",
  color: "white",
};

const logoStyle = {
  margin: 0,
};

const buttonStyle = {
  marginLeft: "15px",
  padding: "10px 18px",
  borderRadius: "8px",
  border: "none",
  background: "#f4b400",
  color: "#0f2c6e",
  fontWeight: "bold",
  cursor: "pointer",
};

export default Navbar;