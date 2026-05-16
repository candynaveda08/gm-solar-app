import logo from "./flf-logo.png.jpeg";

function Navbar() {
  return (
    <div style={navStyle}>
      <div style={logoContainer}>
        <img src={logo} alt="FLF Solar" style={logoStyle} />
      </div>

      <div>
        <button
          style={buttonStyle}
          onClick={() => (window.location.href = "/")}
        >
          Home
        </button>

        <button
          style={buttonStyle}
          onClick={() => (window.location.href = "/quote")}
        >
          Get Quote
        </button>

        <button
          style={buttonStyle}
          onClick={() => (window.location.href = "/dashboard")}
        >
          Dashboard
        </button>
      </div>
    </div>
  );
}

const navStyle = {
  backgroundColor: "#0d2b7e",
  padding: "15px 30px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const logoContainer = {
  display: "flex",
  alignItems: "center",
};

const logoStyle = {
  width: "90px",
  borderRadius: "12px",
};

const buttonStyle = {
  backgroundColor: "#f5b800",
  color: "#0d2b7e",
  border: "none",
  padding: "12px 20px",
  marginLeft: "15px",
  borderRadius: "10px",
  fontWeight: "bold",
  cursor: "pointer",
};

export default Navbar;