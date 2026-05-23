import { useEffect, useState } from "react";

function Dashboard() {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5050/api/leads")
      .then((res) => res.json())
      .then((data) => setLeads(data))
      .catch((err) => console.log(err));
  }, []);

  const deleteLead = async (id) => {
    try {
      await fetch(`http://localhost:5050/api/leads/${id}`, {
        method: "DELETE",
      });

      setLeads(leads.filter((lead) => lead._id !== id));

      alert("Client deleted successfully!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        padding: "40px",
        backgroundColor: "#f4f4f4",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "60px",
          marginBottom: "10px",
        }}
      >
        Admin Dashboard
      </h1>

      <h2
        style={{
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        Customer Requests
      </h2>

      {leads.map((lead) => (
        <div
          key={lead._id}
          style={{
            backgroundColor: "white",
            padding: "30px",
            borderRadius: "15px",
            marginBottom: "25px",
            boxShadow: "0px 2px 10px rgba(0,0,0,0.1)",
            textAlign: "center",
          }}
        >
          <p>
            <strong>Name:</strong> {lead.firstName}
          </p>

          <p>
            <strong>Phone:</strong> {lead.phone}
          </p>

          <p>
            <strong>Address:</strong> {lead.address}
          </p>

          <p>
            <strong>Service:</strong> {lead.service}
          </p>

          <p>
            <strong>Date:</strong> {lead.date}
          </p>

          <p>
            <strong>Time:</strong> {lead.time}
          </p>

          <button
            onClick={() => deleteLead(lead._id)}
            style={{
              backgroundColor: "red",
              color: "white",
              border: "none",
              padding: "12px 20px",
              borderRadius: "10px",
              cursor: "pointer",
              marginTop: "15px",
              fontSize: "16px",
            }}
          >
            Delete Client
          </button>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;