// Header.js
import React from "react";

const Header = ({ groupBy, setGroupBy, sortBy, setSortBy }) => {
  return (
    <div className="header">
      <select value={groupBy} onChange={(e) => setGroupBy(e.target.value)}>
        <option value="status">Group by Status</option>
        <option value="user">Group by User</option>
        <option value="priority">Group by Priority</option>
      </select>

      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="priority">Sort by Priority</option>
        <option value="title">Sort by Title</option>
      </select>
    </div>
  );
};

export default Header;
