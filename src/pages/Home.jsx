import React from "react";
import Header from "../components/Header";
import ReminderCard from "../components/ReminderCard";

export default function Home() {
  return (
    <div>
      <Header />
      <main style={{ padding: "1rem" }}>
        <ReminderCard title="Dentysta" date="2025-08-01" />
        <ReminderCard title="Spotkanie z klientem" date="2025-08-03" />
      </main>
    </div>
  );
}
