import React from "react";

const KanbanCard = ({ ticket }) => {
  return (
    <div
      style={{
        background: "#fff",
        padding: "16px",
        marginBottom: "16px",
        borderRadius: "8px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
      }}
    >
      <h4>{ticket.title}</h4>
      <p>Priority: {ticket.priority}</p>
      <p>Assigned to: {ticket.assignee}</p>
    </div>
  );
};

export default KanbanCard;
