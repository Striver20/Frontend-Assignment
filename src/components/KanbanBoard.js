// KanbanBoard.js
import React from "react";
import "../styles/kanbanboard.css";

const groupTickets = (tickets, groupBy) => {
  switch (groupBy) {
    case "status":
      return tickets.reduce((groups, ticket) => {
        if (!groups[ticket.status]) {
          groups[ticket.status] = [];
        }
        groups[ticket.status].push(ticket);
        return groups;
      }, {});
    case "user":
      return tickets.reduce((groups, ticket) => {
        if (!groups[ticket.userId]) {
          groups[ticket.userId] = [];
        }
        groups[ticket.userId].push(ticket);
        return groups;
      }, {});
    case "priority":
      return tickets.reduce((groups, ticket) => {
        const priority = ticket.priority || 0; // Default to 0 if no priority
        if (!groups[priority]) {
          groups[priority] = [];
        }
        groups[priority].push(ticket);
        return groups;
      }, {});
    default:
      return {};
  }
};

const KanbanBoard = ({ tickets, groupBy, sortBy }) => {
  const groupedTickets = groupTickets(tickets, groupBy);

  // Sort tickets within each group by the selected 'sortBy' option
  const sortTickets = (group) => {
    if (sortBy === "priority") {
      return group.sort((a, b) => b.priority - a.priority); // Sort by priority
    } else if (sortBy === "title") {
      return group.sort((a, b) => a.title.localeCompare(b.title)); // Sort by title
    }
    return group;
  };

  return (
    <div className="kanban-board">
      {Object.keys(groupedTickets).map((groupKey) => (
        <div key={groupKey} className="kanban-column">
          <h3>{groupKey}</h3>
          {sortTickets(groupedTickets[groupKey]).map((ticket) => (
            <div key={ticket.id} className="kanban-card">
              <h4>{ticket.title}</h4>
              <p>Status: {ticket.status}</p>
              <p className="priority">Priority: {ticket.priority}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;
