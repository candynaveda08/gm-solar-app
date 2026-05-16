import { useEffect, useState } from "react";

function Dashboard() {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    fetch("https://gm-solar-app.onrender.com/api/leads")
      .then((res) => res.json())
      .then((data) => setLeads(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>FLF Solar Dashboard</h1>

      {leads.length === 0 ? (
        <p>No hay clientes todavía.</p>
      ) : (
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Teléfono</th>
              <th>Dirección</th>
              <th>Servicio</th>
            </tr>
          </thead>

          <tbody>
            {leads.map((lead, index) => (
              <tr key={index}>
                <td>{lead.name}</td>
                <td>{lead.phone}</td>
                <td>{lead.address}</td>
                <td>{lead.service}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Dashboard;