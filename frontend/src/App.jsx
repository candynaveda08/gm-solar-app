import { useState } from "react";
import Home from "./Home.jsx";
import Dashboard from "./Dashboard.jsx";

function App() {
  const [page, setPage] = useState("home");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [showLogin, setShowLogin] = useState(false);

  const [adminPassword, setAdminPassword] = useState("solar123");

  const adminUser = "flfpartnersllc@gmail.com";

  const handleLogin = () => {
    if (username.toLowerCase() === adminUser && password === adminPassword) {
      setLoggedIn(true);
      setLoginError("");
      setPassword("");
      setShowLogin(false);
      setPage("admin");
    } else {
      setLoginError("Incorrect email or password.");
      setPassword("");
    }
  };

  const handleChangePassword = async () => {
  const currentPassword = prompt("Current password:");
  if (!currentPassword) return;

  const newPassword = prompt("New password:");
  if (!newPassword) return;

  try {
    const response = await fetch(
      "http://localhost:5050/api/admin/change-password",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: "flfpartnersllc@gmail.com",
          currentPassword,
          newPassword,
        }),
      }
    );

    const data = await response.json();

    if (response.ok) {
      alert("Password updated successfully.");
    } else {
      alert(data.message);
    }
  } catch (error) {
    alert("Error connecting to server.");
  }
};

  return (
    <div>
      {showLogin && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 9999
        }}>
          <div style={{
            backgroundColor: "white",
            padding: "30px",
            borderRadius: "15px",
            width: "340px",
            textAlign: "center",
            boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
          }}>
            <h2>Admin Login</h2>

            <input
              type="email"
              placeholder="Email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{
                width: "90%",
                padding: "12px",
                marginBottom: "10px",
                borderRadius: "8px",
                border: "1px solid #ccc"
              }}
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: "90%",
                padding: "12px",
                marginBottom: "10px",
                borderRadius: "8px",
                border: "1px solid #ccc"
              }}
            />

            {loginError && (
              <p style={{ color: "red", fontSize: "14px" }}>{loginError}</p>
            )}

            <button onClick={handleLogin}>Login</button>

            <button
              onClick={() => {
                setShowLogin(false);
                setPassword("");
                setLoginError("");
              }}
              style={{ marginLeft: "10px" }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <div style={{
        padding: "15px",
        textAlign: "center",
        backgroundColor: "#0b2c6b",
      }}>
        <button onClick={() => setPage("home")}>
          Home
        </button>

        {!loggedIn && (
          <button onClick={() => setShowLogin(true)} style={{ marginLeft: "10px" }}>
            Login Admin
          </button>
        )}

        {loggedIn && (
          <>
            <button onClick={() => setPage("admin")} style={{ marginLeft: "10px" }}>
              Admin Dashboard
            </button>

            <button onClick={handleChangePassword} style={{ marginLeft: "10px" }}>
              Change Password
            </button>

            <button
              onClick={() => {
                setLoggedIn(false);
                setPage("home");
              }}
              style={{ marginLeft: "10px" }}
            >
              Logout
            </button>
          </>
        )}
      </div>

      {page === "home" && <Home />}
      {page === "admin" && loggedIn && <Dashboard />}
    </div>
  );
}

export default App;