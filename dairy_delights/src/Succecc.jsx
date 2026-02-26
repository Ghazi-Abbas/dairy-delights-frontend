import React from "react";
import { useNavigate } from "react-router-dom";

export default function Success() {
  const navigate = useNavigate();

  const handleShopMore = () => {
    navigate("/"); // navigate to home page
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
        fontFamily: "'Inter', 'Segoe UI', sans-serif",
      }}
    >
      <h2 style={{ fontSize: "28px", color: "#2e7d32" }}>🎉 Payment Successful!</h2>
      <p style={{ fontSize: "16px", color: "#444", marginTop: "10px" }}>
        Thank you for your purchase. Your payment has been successfully processed.
      </p>

      <button
        onClick={handleShopMore}
        style={{
          marginTop: "30px",
          padding: "12px 24px",
          background: "linear-gradient(90deg,#0d47a1,#1976d2)",
          color: "white",
          border: "none",
          borderRadius: "8px",
          fontSize: "15px",
          cursor: "pointer",
          fontWeight: "600",
          boxShadow: "0 4px 12px rgba(25,118,210,0.3)",
          transition: "transform 0.2s",
        }}
        onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
        onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
      >
        🛍️ Shop More
      </button>

      <div style={{ marginTop: "20px", fontSize: "13px", color: "#777" }}>
        You’ll receive an order confirmation email shortly.
      </div>
    </div>
  );
}
