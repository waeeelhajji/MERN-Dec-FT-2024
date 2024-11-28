import React from "react";

function Book({ book, onToggleReadStatus }) {
  return (
    <li>
      <strong>{book.title}</strong> by {book.author} -{" "}
      <span
        style={{
          textDecoration: book.read ? "line-through" : "none",
        }}
        // onClick={onToggleReadStatus}
      >
        {book.read ? "Read" : "Unread"}
      </span>
    </li>
  );
}

export default Book;
