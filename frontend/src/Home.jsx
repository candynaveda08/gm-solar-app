import logo from "./flf-logo.png.jpeg";

function Home() {
  return (
    <div style={{ fontFamily: "Arial" }}>

      {/* Navbar */}
      <div
        style={{
          backgroundColor: "#0b2c6b",
          padding: "15px 30px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img
            src={logo}
            alt="logo"
            style={{
              width: "60px",
              borderRadius: "10px",
            }}
          />

          <h2 style={{ color: "white" }}>
            GM Solar Solutions
          </h2>
        </div>

        <div style={{ display: "flex", gap: "20px" }}>
          <a
            href="/"
            style={{
              color: "white",
              textDecoration: "none",
            }}
          >
            Home
          </a>

          <a
            href="#quote"
            style={{
              color: "white",
              textDecoration: "none",
            }}
          >
            Quote
          </a>
        </div>
      </div>

      {/* Hero */}
      <div
        style={{
          backgroundColor: "#12357a",
          padding: "60px",
          textAlign: "center",
          color: "white",
        }}
      >
        <h1
          style={{
            fontSize: "55px",
            marginBottom: "10px",
          }}
        >
          Professional Solar Services
        </h1>

        <p
          style={{
            fontSize: "24px",
          }}
        >
          Residential & Commercial Solar Solutions
        </p>

        <button
          style={{
            padding: "15px 30px",
            backgroundColor: "#f4c430",
            border: "none",
            borderRadius: "10px",
            fontSize: "18px",
            cursor: "pointer",
            marginTop: "20px",
          }}
        >
          Get Free Quote
        </button>
      </div>

      {/* Services */}
      <div
        style={{
          padding: "50px",
          textAlign: "center",
        }}
      >
        <h2>Our Services</h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
            marginTop: "30px",
          }}
        >
          <div
            style={{
              border: "1px solid #ccc",
              padding: "25px",
              borderRadius: "12px",
              width: "220px",
            }}
          >
            ☀️ Solar Panel Cleaning
          </div>

          <div
            style={{
              border: "1px solid #ccc",
              padding: "25px",
              borderRadius: "12px",
              width: "220px",
            }}
          >
            🔋 Battery Installation
          </div>

          <div
            style={{
              border: "1px solid #ccc",
              padding: "25px",
              borderRadius: "12px",
              width: "220px",
            }}
          >
            🏠 Residential Solar Support
          </div>
        </div>
      </div>

      {/* Quote Form */}
      <div
        id="quote"
        style={{
          backgroundColor: "#f5f5f5",
          padding: "50px",
          textAlign: "center",
        }}
      >
        <h2>Request A Quote</h2>

        <div
          style={{
            backgroundColor: "white",
            padding: "30px",
            borderRadius: "15px",
            maxWidth: "400px",
            margin: "30px auto",
          }}
        >
          <input
            type="text"
            placeholder="Full Name"
            style={{
              width: "90%",
              padding: "12px",
              marginBottom: "15px",
            }}
          />

          <input
            type="text"
            placeholder="Phone Number"
            style={{
              width: "90%",
              padding: "12px",
              marginBottom: "15px",
            }}
          />

          <input
            type="text"
            placeholder="Address"
            style={{
              width: "90%",
              padding: "12px",
              marginBottom: "15px",
            }}
          />

          <button
            style={{
              backgroundColor: "#0b2c6b",
              color: "white",
              padding: "12px 25px",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            Submit
          </button>
        </div>
      </div>

    </div>
  );
}

export default Home;