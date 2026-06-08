import { useEffect, useState } from "react";
import * as XLSX from "xlsx";

function Dashboard() {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    getLeads();
  }, []);

  const getLeads = async () => {
    try {
      const response = await fetch("https://gm-solar-app-1.onrender.com/api/leads");
      const data = await response.json();
      data.sort((a, b) => a.name.localeCompare(b.name));
      setLeads(data);
      } catch (error) {
  console.log(error);
}
  };
  

  const deleteLead = async (id) => {
    try {
      await fetch(`https://gm-solar-app-1.onrender.com/api/leads/${id}`, {
        method: "DELETE",
      });

      setLeads(leads.filter((lead) => lead._id !== id));
      alert("Client deleted successfully!");
    } catch (error) {
      console.log(error);
    }
  };

  const exportToExcel = () => {
    const data = leads.map((lead) => ({
      Name: lead.firstName,
      Phone: lead.phone,
      Address: lead.address,
      Service: lead.service,
      Date: lead.date,
      Time: lead.time,
    }));

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workbook, worksheet, "Clients");
    XLSX.writeFile(workbook, "clients.xlsx");
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Admin Dashboard</h1>
      <h2>Customer Requests</h2>

      <button
        onClick={exportToExcel}
        style={{
          backgroundColor: "#25D366",
          color: "white",
          padding: "12px 20px",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer",
          marginBottom: "20px",
        }}
      >
        Export to Excel
      </button>

      {leads.map((lead) => (
        <div
          key={lead._id}
          style={{
            border: "1px solid #ccc",
            padding: "20px",
            marginBottom: "15px",
            backgroundColor: "#f9f9f9",
            borderRadius: "12px",
          }}
        >
          <p><strong>Name:</strong> {lead.firstName}</p>
          <p><strong>Phone:</strong> {lead.phone}</p>
          <p><strong>Address:</strong> {lead.address}</p>
          <p><strong>Service:</strong> {lead.service}</p>
          <p><strong>Date:</strong> {lead.date}</p>
          <p><strong>Time:</strong> {lead.time}</p>

          <button
            onClick={() => deleteLead(lead._id)}
            style={{
              backgroundColor: "red",
              color: "white",
              padding: "10px 15px",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
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