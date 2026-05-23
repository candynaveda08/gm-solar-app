import { useState } from "react";
import Home from "./Home.jsx";
import Dashboard from "./Dashboard.jsx";

function App() {
  const [page, setPage] = useState("home");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const adminPassword = "solar123";

  const handleLogin = () => {
    if (password === adminPassword) {
      setLoggedIn(true);
      setPage("admin");
    } else {
      alert("Wrong Password");
    }
  };

  return (
    <div>
      <div
        style={{
          padding: "15px",
          textAlign: "center",
          backgroundColor: "#0b2c6b",
        }}
      >
        <button
          onClick={() => setPage("home")}
          style={{
            padding: "10px 20px",
            marginRight: "10px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Home
        </button>

        {!loggedIn && (
          <>
            <input
              type="password"
              placeholder="Admin Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                padding: "10px",
                borderRadius: "8px",
                marginRight: "10px",
                border: "none",
              }}
            />

            <button
              onClick={handleLogin}
              style={{
                padding: "10px 20px",
                borderRadius: "8px",
                border: "none",
                backgroundColor: "#25D366",
                color: "white",
                cursor: "pointer",
              }}
            >
              Login Admin
            </button>
          </>
        )}

        {loggedIn && (
          <button
            onClick={() => setPage("admin")}
            style={{
              padding: "10px 20px",
              borderRadius: "8px",
              border: "none",
              backgroundColor: "#25D366",
              color: "white",
              cursor: "pointer",
            }}
          >
            Admin Dashboard
          </button>
        )}
      </div>

      {page === "home" && <Home />}
      {page === "admin" && loggedIn && <Dashboard />}
    </div>
  );
}

export default App;
