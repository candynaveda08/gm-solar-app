function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#0d2f7a",
        padding: "15px",
        display: "flex",
        justifyContent: "center",
        gap: "15px",
      }}
    >
      <button>Home</button>
      <button>Services</button>
      <button>Contact</button>
    </nav>
  );
}

export default Navbar;