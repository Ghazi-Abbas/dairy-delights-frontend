import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { DataContext } from "./App";
import { Link } from "react-router-dom";

export default function Cart() {
  const { stdId, setitem } = useContext(DataContext);
  const [data, setData] = useState([]);
  const [promo, setPromo] = useState("");
  const [discount, setDiscount] = useState(0);
  const [promoMessage, setPromoMessage] = useState("");
  const { amoutToPay,setAmoutToPay } = useContext(DataContext);

  //  Fetch cart when stdId changes
  useEffect(() => {
    if (stdId) fetchCartData();
  }, [stdId]);

  const fetchCartData = async () => {
    try {
      const resp = await axios.get(`http://localhost:3004/users/${stdId}`);
      const cart = resp.data?.cart || [];
      setData(cart);
      setitem(cart.reduce((sum, i) => sum + (i.quantity || 0), 0));
    } catch (err) {
      alert("Error fetching cart: " + err.message);
    }
  };

  //  Update cart in backend and state
  const updateCart = async (updatedCart) => {
    try {
      await axios.patch(`http://localhost:3004/users/${stdId}`, { cart: updatedCart });
      setData(updatedCart);
      setitem(updatedCart.reduce((sum, i) => sum + (i.quantity || 0), 0));
    } catch (err) {
      alert("Error updating cart: " + err.message);
    }
  };

  //  Handlers
  const handleAdd = (id) =>
    updateCart(
      data.map((i) =>
        i.id === id ? { ...i, quantity: (i.quantity || 0) + 1 } : i
      )
    );

  const handleSubtract = (id) =>
    updateCart(
      data.map((i) =>
        i.id === id && i.quantity > 1
          ? { ...i, quantity: i.quantity - 1 }
          : i
      )
    );

  const handleRemove = (id) => updateCart(data.filter((i) => i.id !== id));

  //  Price calculation
  const totalPrice = data.reduce(
    (sum, i) => sum + (i.price || 0) * (i.quantity || 0),
    0
  );
  const discountedPrice = totalPrice - totalPrice * discount;
 


  // Promo Code logic
  const applyPromoCode = () => {
    if (promo === "SAVE10") {
        
      setDiscount(0.1);
      setPromoMessage("Promo applied! You saved 10%");
    } else if (promo === "SAVE20") {
      setDiscount(0.2);
      setPromoMessage("Promo applied! You saved 20%");
    } else {
      setDiscount(0);
      setPromoMessage("Invalid promo code");
    }
  };
  useEffect(() => {
  // Only update if discountedPrice is a number and > 0
  if (data.length > 0 ) {
    setAmoutToPay((discountedPrice.toFixed(2)));
  }
}, [applyPromoCode,data.length]);
console.log(amoutToPay);

  //  Styles
  const styles = {
    main: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: "40px",
      padding: "40px 80px",
      backgroundColor: "#f8f8f8",
      minHeight: "100vh",
      fontFamily: "Arial, sans-serif",
    },
    left: { flex: "2" },
    right: {
      flex: "1",
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "20px",
      backgroundColor: "#fafafa",
    },
    cartItemBox: {
      backgroundColor: "#fff",
      borderRadius: "12px",
      padding: "20px",
      marginBottom: "20px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    image: {
      width: "120px",
      height: "120px",
      objectFit: "contain",
      borderRadius: "8px",
      backgroundColor: "#f5f5f5",
    },
    itemDetails: {
      flex: "1",
      marginLeft: "20px",
      display: "flex",
      flexDirection: "column",
      gap: "5px",
    },
    rightDetails: {
      textAlign: "right",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      justifyContent: "space-between",
      height: "100%",
    },
    qtyControl: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      marginTop: "8px",
    },
    qtyBtn: {
      width: "28px",
      height: "28px",
      border: "1px solid #ccc",
      borderRadius: "4px",
      background: "#fff",
      cursor: "pointer",
    },
    removeBtn: {
      color: "#d32f2f",
      background: "none",
      border: "none",
      cursor: "pointer",
      marginTop: "10px",
    },
    promoBox: {
      backgroundColor: "#e9e9e9",
      padding: "10px",
      borderRadius: "6px",
      marginBottom: "10px",
      fontWeight: "600",
      display: "flex",
      justifyContent: "space-between",
      cursor: "pointer",
    },
    promoInputBox: {
      display: "flex",
      marginTop: "10px",
      gap: "10px",
    },
    promoInput: {
      flex: "1",
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "4px",
    },
    applyBtn: {
      backgroundColor: "#333",
      color: "#fff",
      padding: "10px 20px",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
    },
    summaryLine: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: "10px",
      fontSize: "15px",
    },
    checkoutBtn: {
      backgroundColor: "#000",
      color: "#fff",
      padding: "14px",
      border: "none",
      borderRadius: "5px",
      width: "100%",
      marginTop: "25px",
      cursor: "pointer",
      fontWeight: "600",
      fontSize: "16px",
    },
  };

  return (
    <div style={styles.main}>
      <div style={styles.left}>
        <h2 style={{ fontSize: "26px", fontWeight: "700", marginBottom: "20px" }}>
          MY SHOPPING CART ({data.reduce((sum, i) => sum + (i.quantity || 0), 0)})
        </h2>

        {data.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          data.map((d) => (
            <div key={d.id} style={styles.cartItemBox}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={d.image ? `images/${d.image}` : "/placeholder-image.jpg"}
                  alt={d.productName}
                  style={styles.image}
                />
                <div style={styles.itemDetails}>
                  <h4 style={{ margin: "0 0 5px", fontSize: "18px" }}>{d.productName}</h4>
                  <p style={{ margin: "4px 0" }}>Color: {d.color || "N/A"}</p>
                  <p style={{ margin: "4px 0" }}>Size: {d.size || "Standard"}</p>
                  <div style={styles.qtyControl}>
                    <button style={styles.qtyBtn} onClick={() => handleSubtract(d.id)}>
                      −
                    </button>
                    <span>{d.quantity}</span>
                    <button style={styles.qtyBtn} onClick={() => handleAdd(d.id)}>
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div style={styles.rightDetails}>
                <p style={{ fontWeight: "600", fontSize: "18px" }}>₹{d.price}</p>
                <button style={styles.removeBtn} onClick={() => handleRemove(d.id)}>
                  🗑 Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Right: Summary */}
      <div style={styles.right}>
        <div style={styles.promoBox}>
          <span>APPLY A PROMO CODE</span>
          <span>⌄</span>
        </div>

        <div style={styles.promoInputBox}>
          <input
            type="text"
            placeholder="Enter a promo code"
            value={promo}
            onChange={(e) => setPromo(e.target.value)}
            style={styles.promoInput}
          />
          <button onClick={applyPromoCode} style={styles.applyBtn}>
            APPLY
          </button>
        </div>

        {promoMessage && <p style={{ color: "green", fontSize: "13px" }}>{promoMessage}</p>}

        <div style={styles.summaryLine}>
          <span>SUBTOTAL</span>
          <span>₹{totalPrice}</span>
        </div>
        <div style={styles.summaryLine}>
          <span>SHIPPING COSTS</span>
          <span style={{ color: "green" }}>FREE</span>
        </div>
        <div
          style={{
            ...styles.summaryLine,
            fontWeight: "700",
            fontSize: "18px",
            marginTop: "20px",
          }}
        >
          <span>GRAND TOTAL</span>
          <span>₹{discountedPrice.toFixed(2)}</span>
        </div>

        <Link to="/payment">
          <button style={styles.checkoutBtn}>CHECKOUT</button>
          
        </Link>
      </div>
    </div>
  );
}
