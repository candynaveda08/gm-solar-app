function Quote() {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Free Solar Quote</h1>

      <input placeholder="Full Name" />
      <br /><br />

      <input placeholder="Phone Number" />
      <br /><br />

      <input placeholder="Address" />
      <br /><br />

      <select>
        <option>Select Service</option>
        <option>Solar Panel Cleaning</option>
        <option>Battery Installation</option>
        <option>System Maintenance</option>
      </select>
      <br /><br />

      <button>Submit Quote</button>
    </div>
  );
}

export default Quote;