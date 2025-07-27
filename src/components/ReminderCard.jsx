import React from "react";

export default function ReminderCard({ title, date }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "1rem" }}>
      <h2>{title}</h2>
      <p>{date}</p>
    </div>
  );
}
