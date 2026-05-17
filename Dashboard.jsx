import { useEffect, useState } from "react";

function Dashboard() {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    fetch("https://gm-solar-app-1.onrender.com/api/leads")
      .then((res) => res.json())
      .then((data) => setLeads(data))
      .catch((error) => console.error(error));
  }, []);
  

  return (
    <div style={{ padding: "20px" }}>
      <h2>Leads Dashboard</h2>

      {leads.length === 0 ? (
        <p>No leads yet</p>
      ) : (
        leads.map((lead, index) => (
          <div key={index} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
            <p><b>Name:</b> {lead.name}</p>
            <p><b>Phone:</b> {lead.phone}</p>
            <p><b>Address:</b> {lead.address}</p>
            <p><b>Bill:</b> {lead.bill}</p>
            <p><b>Service:</b> {lead.service}</p>
            <p><b>Date:</b> {lead.date}</p>
            <p><b>Time:</b> {lead.time}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Dashboard;