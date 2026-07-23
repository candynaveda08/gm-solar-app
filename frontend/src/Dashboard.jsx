import { useEffect, useMemo, useState } from "react";
import * as XLSX from "xlsx";

const API_URL = "https://gm-solar-app-1.onrender.com/api/leads";

function Dashboard() {
  const [leads, setLeads] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState("");

  useEffect(() => {
    getLeads();
  }, []);

  const getLeads = async () => {
    try {
      setLoading(true);

      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error("Could not load customer requests.");
      }

      const data = await response.json();

      const sortedData = [...data].sort((a, b) =>
        (a.firstName || a.name || "").localeCompare(
          b.firstName || b.name || ""
        )
      );

      setLeads(sortedData);
    } catch (error) {
      console.error(error);
      alert("Could not load customer requests.");
    } finally {
      setLoading(false);
    }
  };

  const filteredLeads = useMemo(() => {
    const value = search.toLowerCase().trim();

    if (!value) return leads;

    return leads.filter((lead) => {
      const searchableText = [
        lead.firstName,
        lead.name,
        lead.phone,
        lead.email,
        lead.address,
        lead.service,
        lead.date,
        lead.time,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return searchableText.includes(value);
    });
  }, [leads, search]);

  const deleteLead = async (id, name) => {
    const confirmed = window.confirm(
      `Are you sure you want to delete ${name || "this client"}?`
    );

    if (!confirmed) return;

    try {
      setDeletingId(id);

      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Could not delete the client.");
      }

      setLeads((currentLeads) =>
        currentLeads.filter((lead) => lead._id !== id)
      );
    } catch (error) {
      console.error(error);
      alert("Could not delete the client.");
    } finally {
      setDeletingId("");
    }
  };

  const exportToExcel = () => {
    if (filteredLeads.length === 0) {
      alert("There are no customer requests to export.");
      return;
    }

    const data = filteredLeads.map((lead) => ({
      Name: lead.firstName || lead.name || "",
      Phone: lead.phone || "",
      Email: lead.email || "",
      Address: lead.address || "",
      Service: lead.service || "",
      Date: lead.date || "",
      Time: lead.time || "",
    }));

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workbook, worksheet, "Customer Requests");
    XLSX.writeFile(workbook, "flf-customer-requests.xlsx");
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "40px 20px",
        backgroundColor: "#f4f7fb",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1150px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            marginBottom: "28px",
          }}
        >
          <p
            style={{
              margin: "0 0 6px",
              color: "#e8a900",
              fontSize: "14px",
              fontWeight: "700",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
            }}
          >
            FLF Solar Services
          </p>

          <h1
            style={{
              margin: "0",
              color: "#0b1f3a",
              fontSize: "clamp(32px, 5vw, 48px)",
            }}
          >
            Admin Dashboard
          </h1>

          <p
            style={{
              margin: "10px 0 0",
              color: "#64748b",
              fontSize: "17px",
            }}
          >
            Review and manage customer service requests.
          </p>
        </div>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "18px",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              padding: "22px",
              backgroundColor: "white",
              borderRadius: "16px",
              boxShadow: "0 10px 30px rgba(15, 23, 42, 0.08)",
            }}
          >
            <p
              style={{
                margin: "0 0 8px",
                color: "#64748b",
                fontWeight: "700",
              }}
            >
              Total Requests
            </p>

            <p
              style={{
                margin: "0",
                color: "#0b1f3a",
                fontSize: "38px",
                fontWeight: "800",
              }}
            >
              {leads.length}
            </p>
          </div>

          <div
            style={{
              padding: "22px",
              backgroundColor: "white",
              borderRadius: "16px",
              boxShadow: "0 10px 30px rgba(15, 23, 42, 0.08)",
            }}
          >
            <p
              style={{
                margin: "0 0 8px",
                color: "#64748b",
                fontWeight: "700",
              }}
            >
              Results Showing
            </p>

            <p
              style={{
                margin: "0",
                color: "#0b1f3a",
                fontSize: "38px",
                fontWeight: "800",
              }}
            >
              {filteredLeads.length}
            </p>
          </div>
        </section>

        <section
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "14px",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "18px",
            marginBottom: "24px",
            backgroundColor: "white",
            borderRadius: "16px",
            boxShadow: "0 10px 30px rgba(15, 23, 42, 0.08)",
          }}
        >
          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search by name, phone, email or service"
            style={{
              flex: "1 1 320px",
              minWidth: "220px",
              padding: "14px 16px",
              border: "1px solid #d7dee8",
              borderRadius: "10px",
              fontSize: "16px",
              outline: "none",
            }}
          />

          <button
            type="button"
            onClick={exportToExcel}
            style={{
              padding: "14px 20px",
              backgroundColor: "#16a34a",
              color: "white",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              fontSize: "15px",
              fontWeight: "700",
            }}
          >
            Export to Excel
          </button>
        </section>

        {loading ? (
          <div
            style={{
              padding: "50px 20px",
              textAlign: "center",
              backgroundColor: "white",
              borderRadius: "16px",
            }}
          >
            <p style={{ margin: "0", color: "#64748b", fontSize: "18px" }}>
              Loading customer requests...
            </p>
          </div>
        ) : filteredLeads.length === 0 ? (
          <div
            style={{
              padding: "50px 20px",
              textAlign: "center",
              backgroundColor: "white",
              borderRadius: "16px",
              boxShadow: "0 10px 30px rgba(15, 23, 42, 0.08)",
            }}
          >
            <h2 style={{ margin: "0 0 10px", color: "#0b1f3a" }}>
              No customer requests found
            </h2>

            <p style={{ margin: "0", color: "#64748b" }}>
              New quote requests will appear here.
            </p>
          </div>
        ) : (
          <section
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
              gap: "20px",
            }}
          >
            {filteredLeads.map((lead) => {
              const clientName = lead.firstName || lead.name || "Client";

              return (
                <article
                  key={lead._id}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "24px",
                    backgroundColor: "white",
                    border: "1px solid #e2e8f0",
                    borderRadius: "16px",
                    boxShadow: "0 10px 30px rgba(15, 23, 42, 0.08)",
                  }}
                >
                  <div style={{ marginBottom: "18px" }}>
                    <h2
                      style={{
                        margin: "0 0 5px",
                        color: "#0b1f3a",
                        fontSize: "23px",
                      }}
                    >
                      {clientName}
                    </h2>

                    <span
                      style={{
                        display: "inline-block",
                        padding: "7px 11px",
                        backgroundColor: "#fff7db",
                        color: "#9a6700",
                        borderRadius: "999px",
                        fontSize: "13px",
                        fontWeight: "700",
                      }}
                    >
                      {lead.service || "Service not selected"}
                    </span>
                  </div>

                  <div
                    style={{
                      display: "grid",
                      gap: "12px",
                      color: "#475569",
                      lineHeight: "1.5",
                    }}
                  >
                    <p style={{ margin: "0" }}>
                      <strong style={{ color: "#0b1f3a" }}>Phone:</strong>{" "}
                      {lead.phone || "Not provided"}
                    </p>

                    <p style={{ margin: "0", overflowWrap: "anywhere" }}>
                      <strong style={{ color: "#0b1f3a" }}>Email:</strong>{" "}
                      {lead.email || "Not provided"}
                    </p>

                    <p style={{ margin: "0" }}>
                      <strong style={{ color: "#0b1f3a" }}>Address:</strong>{" "}
                      {lead.address || "Not provided"}
                    </p>

                    <p style={{ margin: "0" }}>
                      <strong style={{ color: "#0b1f3a" }}>Date:</strong>{" "}
                      {lead.date || "Not provided"}
                    </p>

                    <p style={{ margin: "0" }}>
                      <strong style={{ color: "#0b1f3a" }}>Time:</strong>{" "}
                      {lead.time || "Not provided"}
                    </p>
                  </div>

                  <button
                    type="button"
                    disabled={deletingId === lead._id}
                    onClick={() => deleteLead(lead._id, clientName)}
                    style={{
                      marginTop: "24px",
                      padding: "12px 16px",
                      backgroundColor:
                        deletingId === lead._id ? "#94a3b8" : "#dc2626",
                      color: "white",
                      border: "none",
                      borderRadius: "10px",
                      cursor:
                        deletingId === lead._id ? "not-allowed" : "pointer",
                      fontWeight: "700",
                    }}
                  >
                    {deletingId === lead._id
                      ? "Deleting..."
                      : "Delete Client"}
                  </button>
                </article>
              );
            })}
          </section>
        )}
      </div>
    </main>
  );
}

export default Dashboard;