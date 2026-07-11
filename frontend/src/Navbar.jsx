import flfLogo from "./flf-logo.png";

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#0b1f3a",
        height: "80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 50px",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        boxShadow: "0 3px 10px rgba(0,0,0,0.2)",
      }}
    >
      {/* Logo */}
      <div
        style={{
  width: "65px",
  height: "65px",
  objectFit: "contain",
  borderRadius: "10px",
}}
      >
        <img
          src={flfLogo}
          alt="FLF Solar"
          style={{
            width: "95px",
            height: "95px",
            borderRadius: "8px",
          }}
        />

        <h2
          style={{
            color: "white",
            margin: 0,
            fontSize: "28px",
          }}
        >
          FLF Solar Services
        </h2>
      </div>

      {/* Menú */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "30px",
        }}
      >
        

        
      </div>
    </nav>
  );
}

export default Navbar;