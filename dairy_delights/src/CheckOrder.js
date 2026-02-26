import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { DataContext } from "./App";

export default function CheckOrder() {
  const { stdId } = useContext(DataContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const url = `http://localhost:3004/users/${stdId}`;
        const userResp = await axios.get(url);
        setOrders(userResp.data.orders || []);
      } catch (err) {
        console.error("Error fetching orders:", err);
      }
    };

    if (stdId) fetchOrders();
  }, [stdId]);

  return (
    <div style={{ padding: "20px", fontFamily: "Inter, sans-serif" }}>
      <h2>Your Orders</h2>

      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
          {orders.map((order) => (
            <div
              key={order.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "12px",
                width: "300px",
                background: "#fafafa",
              }}
            >
              <h4>Order ID: {order.id}</h4>
              <p><strong>Amount:</strong> ₹{order.amount}</p>
              <p><strong>Payment:</strong> {order.paymentMethod}</p>
              <p><strong>Status:</strong> {order.status}</p>
              <p><strong>Date:</strong> {new Date(order.date).toLocaleString()}</p>
              
              <h5>Items:</h5>
              <ul>
                {order.items.map((item, idx) => (
                  <li key={idx}>
                    {item.productName} × {item.quantity} — ₹{item.price}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
