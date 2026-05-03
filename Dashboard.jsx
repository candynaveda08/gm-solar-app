import { useEffect, useState } from "react";

function Dashboard() {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/leads")
      .then(res => res.json())
      .then(data => setLeads(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Clients</h1>

      {leads.length === 0 ? (
        <p>No clients yet</p>
      ) : (
        leads.map((lead, i) => (
          <div key={i}>
            <p>{lead.name}</p>
            <p>{lead.phone}</p>
            <p>{lead.address}</p>
            <hr />
          </div>
        ))
      )}
    </div>
  );
}

export default Dashboard;