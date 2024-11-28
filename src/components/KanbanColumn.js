import React from "react";
import KanbanCard from "./KanbanCard";

const KanbanColumn = ({ title, tickets }) => {
  return (
    <div
      style={{
        flex: 1,
        background: "#f4f4f4",
        padding: "16px",
        borderRadius: "8px",
      }}
    >
      <h3>{title}</h3>
      {tickets.map((ticket) => (
        <KanbanCard key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
};

export default KanbanColumn;
