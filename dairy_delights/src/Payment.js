import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "./App";
import axios from "axios";

export default function Payment() {
  const navigate = useNavigate();

  const [method, setMethod] = useState("card");
  const [processing, setProcessing] = useState(false);



  // form fields
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [upiId, setUpiId] = useState("");
  const [wallet, setWallet] = useState("");
  const { amoutToPay,setAmoutToPay } = useContext(DataContext);
  const { stdId,setitem} = useContext(DataContext);
   

  const totalAmount = amoutToPay; // demo amount

  const isCardValid =
    cardNumber.replace(/\s+/g, "").length >= 12 &&
    /^[0-9]{2}\/[0-9]{2}$/.test(expiry) &&
    /^[0-9]{3,4}$/.test(cvv);
  const isUpiValid = /^[\w.-]+@[\w.-]+$/.test(upiId);
  const isWalletValid = wallet !== "";

  const canPay =
    !processing &&
    ((method === "card" && isCardValid) ||
      (method === "upi" && isUpiValid) ||
      (method === "wallet" && isWalletValid));

     

  const handlePayment = async () => {
  if (!canPay) return;
  setProcessing(true);

  try {
    // Fetch current cart
    const userResp = await axios.get(`http://localhost:3004/users/${stdId}`);
    const cart = userResp.data.cart || [];
    const user=userResp.data;

    if (cart.length === 0) {
      alert("Cart is empty!");
      setProcessing(false);
      return;
    }

    // 2️⃣ Add order to user's orders array
    const newOrder = {
      id: Date.now(), // unique order id
      items: cart,
      amount: amoutToPay,
      
      date: new Date().toISOString(),
      paymentMethod: method,
      status: "Pending",
    };


     const adminOrder = {
      id: Date.now(), // unique order id
      items: cart,
      amount: amoutToPay,
      userName: user.fullName || "Unknown",
      userEmail: user.email || "Unknown",
      userAddress: user.address || "No address",
      userImage: user.image|| "No image",
      date: new Date().toISOString(),
      paymentMethod: method,
      status: "Pending",
    };

    const updatedOrders = [...(userResp.data.orders || []), newOrder];

    // 3️⃣ Update user: clear cart & add order
    await axios.patch(`http://localhost:3004/users/${stdId}`, {
      cart: [],
      orders: updatedOrders,
    });

    // 4️⃣ Optionally send order to admin (you can have adminOrders in JSON)
    const adminResp = await axios.get("http://localhost:3004/users/ADMIN001");
    const adminOrders = adminResp.data || [];
    await axios.patch("http://localhost:3004/users/ADMIN001",{orders: adminOrder});

    // 5️⃣ Update local state/context
    setAmoutToPay(0);

    // ✅ Payment success
    setProcessing(false);
    alert(`Payment Successful! Your Order ID: ${newOrder.id}`);
    navigate("/success");
    setitem(0);
  } catch (err) {
    setProcessing(false);
    alert("Error during checkout: " + err.message);
  }
};

  // helpers
  const formatCardNumber = (v) =>
    v.replace(/\D/g, "").slice(0, 16).replace(/(.{4})/g, "$1 ").trim();

  // --- STYLES ---
  const styles = {
    page: {
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background:
        "linear-gradient(135deg, #0b3d91 0%, #1976d2 50%, #6fb1ff 100%)",
      fontFamily: "'Inter','Segoe UI',sans-serif",
      padding: "24px",
    },
    card: {
      width: "420px",
      background: "#fff",
      borderRadius: "14px",
      boxShadow: "0 10px 30px rgba(2,6,23,0.25)",
      padding: "26px",
      textAlign: "left",
      color: "#222",
      position: "relative",
      overflow: "hidden",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "14px",
    },
    logo: { height: "28px" },
    amountBox: {
      background: "#f5f9ff",
      borderRadius: "10px",
      padding: "12px",
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "14px",
    },
    methodsRow: { display: "flex", gap: "10px", marginBottom: "14px" },
    methodBtn: (active) => ({
      flex: 1,
      padding: "10px",
      borderRadius: "8px",
      border: active ? "2px solid #1976d2" : "1px solid #ddd",
      background: active ? "#e3f2fd" : "#fafafa",
      color: active ? "#0d47a1" : "#555",
      fontWeight: active ? "600" : "400",
      cursor: "pointer",
      textAlign: "center",
      fontSize: "14px",
    }),
    input: {
      width: "100%",
      padding: "12px",
      borderRadius: "8px",
      border: "1px solid #ddd",
      fontSize: "14px",
      marginBottom: "10px",
    },
    smallRow: { display: "flex", gap: "8px" },
    payBtn: (enabled) => ({
      width: "100%",
      padding: "12px",
      borderRadius: "10px",
      border: "none",
      background: enabled
        ? "linear-gradient(90deg,#0d47a1,#1976d2)"
        : "#c6d7f7",
      color: "#fff",
      fontWeight: 700,
      fontSize: "15px",
      cursor: enabled ? "pointer" : "not-allowed",
      transition: "0.3s",
    }),
    footer: { marginTop: "12px", fontSize: "12px", color: "#666" },
  };

  // --- JSX ---
  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <div style={styles.header}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <img
              src="https://bookface-images.s3.amazonaws.com/logos/48a842c412c82e39ae5685642d749cd23e014c1a.png?1645662585"
              alt="Razorpay"
              style={styles.logo}
            />
            <span style={{ fontSize: 13, color: "#666" }}>Demo Checkout</span>
          </div>
          <span style={{ fontSize: 13, color: "#1976d2" }}>🔒 Secure</span>
        </div>

        <div style={styles.amountBox}>
          <span>Amount to Pay</span>
          <b>₹{totalAmount}</b>
        </div>

        {/* Methods */}
        <div style={styles.methodsRow}>
          <div
            style={styles.methodBtn(method === "card")}
            onClick={() => setMethod("card")}
          >
            💳 Card
          </div>
          <div
            style={styles.methodBtn(method === "upi")}
            onClick={() => setMethod("upi")}
          >
            🪙 UPI
          </div>
          <div
            style={styles.methodBtn(method === "wallet")}
            onClick={() => setMethod("wallet")}
          >
            👛 Wallet
          </div>
        </div>

        {/* Card Payment */}
        {method === "card" && (
          <>
            <input
              style={styles.input}
              placeholder="Card number"
              value={cardNumber}
              onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
            />
            <div style={styles.smallRow}>
              <input
                style={{ ...styles.input, flex: 1 }}
                placeholder="MM/YY"
                value={expiry}
                onChange={(e) => {
                  let v = e.target.value.replace(/\D/g, "").slice(0, 4);
                  if (v.length >= 3) v = `${v.slice(0, 2)}/${v.slice(2)}`;
                  setExpiry(v);
                }}
              />
              <input
                style={{ ...styles.input, flex: 1 }}
                placeholder="CVV"
                value={cvv}
                onChange={(e) =>
                  setCvv(e.target.value.replace(/\D/g, "").slice(0, 4))
                }
              />
            </div>
          </>
        )}

        {/* UPI Payment */}
        {method === "upi" && (
          <input
            style={styles.input}
            placeholder="Enter your UPI ID (e.g., name@oksbi)"
            value={upiId}
            onChange={(e) => setUpiId(e.target.value)}
          />
        )}

        {/* Wallet Payment */}
        {method === "wallet" && (
          <select
            style={styles.input}
            value={wallet}
            onChange={(e) => setWallet(e.target.value)}
          >
            <option value="">Select Wallet</option>
            <option value="Paytm">Paytm</option>
            <option value="PhonePe">PhonePe</option>
            <option value="AmazonPay">Amazon Pay</option>
          </select>
        )}

        <button
          onClick={handlePayment}
          disabled={!canPay}
          style={styles.payBtn(canPay)}
        >
          {processing ? "Processing..." : `Pay ₹${totalAmount}`}
        </button>

        <div style={styles.footer}>
          <p>Test card: 4111 1111 1111 1111 • Any MM/YY • CVV 123</p>
          <p>UPI: anyname@oksbi • Wallet: any option</p>
          <p>Demo Mode • No real payment</p>
        </div>
      </div>
    </div>
  );
}
