import React from "react";

function FilterBooks({ onFilterChange }) {
  return (
    <div>
      <button onClick={() => onFilterChange("all")}>All</button>
      <button onClick={() => onFilterChange("read")}>Read</button>
      <button onClick={() => onFilterChange("unread")}>Unread</button>
    </div>
  );
}

export default FilterBooks;
