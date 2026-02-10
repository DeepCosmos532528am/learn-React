function UserProfile({ userData }) {
  return (
    <div style={{
      border: "1px solid #e0e0e0",
      padding: "20px",
      margin: "15px",
      borderRadius: "12px",
      backgroundColor: "#ffffff",
      boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
      width: "280px"
    }}>
      <header style={{ borderBottom: "2px solid #ff2525", marginBottom: "15px" }}>
        <h3 style={{ margin: "0 0 5px 0", color: "#333" }}>
          {userData.fname}
        </h3>
        <small style={{ color: "#888" }}>User ID: {userData.id}</small>
      </header>

      <section>
        <strong style={{ fontSize: "14px", color: "#555" }}>Interests</strong>
        <ul style={{ marginTop: "8px", paddingLeft: "20px", color: "#666" }}>
          {userData.Interests.map((interest, index) => (
            <li key={index} style={{ marginBottom: "4px" }}>
              {interest}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default UserProfile;