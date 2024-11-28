import React from "react";
import Book from "./Book";

function BookList({ books, onToggleReadStatus }) {
  return (
    <ul>
      {books.map((book, index) => (
        <Book
          key={index}
          book={book}
        //   onToggleReadStatus={() => onToggleReadStatus(index)}
        />
      ))}
    </ul>
  );
}

export default BookList;
