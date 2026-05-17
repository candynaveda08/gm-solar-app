import { useEffect, useState } from "react";

function Dashboard() {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5050/api/leads")
      .then((res) => res.json())
      .then((data) => setLeads(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={pageStyle}>
      <h1>FLF Solar Dashboard</h1>
      <p>Clientes registrados</p>

      {leads.length === 0 ? (
        <p>No hay clientes todavía.</p>
      ) : (
        <div style={tableContainer}>
          {leads.map((lead) => (
            <div style={cardStyle} key={lead._id}>
              <h3>{lead.firstName} {lead.lastName}</h3>
              <p><strong>Phone:</strong> {lead.phone}</p>
              <p><strong>Address:</strong> {lead.address}</p>
              <p><strong>Service:</strong> {lead.service}</p>
              <p><strong>Comments:</strong> {lead.comments}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const pageStyle = {
  minHeight: "100vh",
  padding: "40px",
  background: "#f4f4f4",
  fontFamily: "Arial",
  textAlign: "center",
};

const tableContainer = {
  display: "flex",
  flexWrap: "wrap",
  gap: "20px",
  justifyContent: "center",
  marginTop: "30px",
};

const cardStyle = {
  background: "white",
  padding: "20px",
  borderRadius: "15px",
  width: "300px",
  textAlign: "left",
  boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
};

export default Dashboard;