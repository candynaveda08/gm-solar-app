import flfLogo from "./flf-logo.png";

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#0b1f3a",
        minHeight: "95px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 50px",
        boxShadow: "0 3px 10px rgba(0,0,0,0.2)",
      }}
    >
      {/* Logo y nombre */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "18px",
        }}
      >
        <img
          src={flfLogo}
          alt="FLF Solar"
          style={{
          width: "85px",
          height: "85px",
          objectFit: "contain",
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          padding: "6px",
          boxShadow: "0 6px 18px rgba(0,0,0,0.20)",
          display: "block",
    }}
        />

        <div>
          <h2
            style={{
              color: "white",
              margin: 0,
              fontSize: "34px",
              fontWeight: "700",
              letterSpacing: "0.5px",
              whiteSpace: "nowrap",
            }}
          >
            FLF Solar Services
          </h2>

          <p
            style={{
              color: "rgba(255,255,255,0.8)",
              margin: "4px 0 0",
              fontSize: "14px",
            }}
          >
            More Energy. More Savings. Total Peace of Mind.
          </p>
        </div>
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