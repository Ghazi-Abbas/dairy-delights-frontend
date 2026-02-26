import React, { useState } from "react";

export default function Email() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSendEmail = (e) => {
    e.preventDefault();

    const recipient = "dairy@gmail.com";

    // Gmail compose link format:
    // https://mail.google.com/mail/?view=cm&fs=1&to=<email>&su=<subject>&body=<body>
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      recipient
    )}&su=${encodeURIComponent(
      subject || "Customer Support Request"
    )}&body=${encodeURIComponent(
      `Hello Dairy Team,\n\nMy name is ${name || "Customer"}.\n\n${message}\n\nThank you,\n${name || "Customer"}`
    )}`;

    // Open Gmail compose window in a new tab
    window.open(gmailUrl, "_blank");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #0d47a1, #1976d2, #42a5f5)",
        fontFamily: "'Inter', 'Segoe UI', sans-serif",
        padding: "20px",
      }}
    >
      <form
        onSubmit={handleSendEmail}
        style={{
          background: "#fff",
          borderRadius: "14px",
          padding: "30px 28px",
          width: "400px",
          boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
        }}
      >
        <h2 style={{ textAlign: "center", color: "#0d47a1", marginBottom: "20px" }}>
          📧 Contact Dairy Support
        </h2>

        <label style={{ fontSize: "14px", color: "#333" }}>Your Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "14px",
          }}
          required
        />

        <label style={{ fontSize: "14px", color: "#333" }}>Subject</label>
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Enter subject"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "14px",
          }}
          required
        />

        <label style={{ fontSize: "14px", color: "#333" }}>Describe Your Issue</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write your problem here..."
          rows="4"
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "14px",
            resize: "none",
          }}
          required
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            background: "linear-gradient(90deg,#0d47a1,#1976d2)",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontWeight: "600",
            fontSize: "15px",
            cursor: "pointer",
            marginTop: "20px",
            transition: "0.3s",
          }}
          onMouseOver={(e) => (e.target.style.opacity = 0.9)}
          onMouseOut={(e) => (e.target.style.opacity = 1)}
        >
          Send via Gmail
        </button>

        <p
          style={{
            textAlign: "center",
            marginTop: "12px",
            color: "#888",
            fontSize: "12px",
          }}
        >
          It will open Gmail with your message pre-filled.
        </p>
      </form>
    </div>
  );
}
