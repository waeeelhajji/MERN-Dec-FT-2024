import React, { useState } from "react";
import BookList from "./components/BookList";
import FilterBooks from "./components/FilterBooks";

function App() {
  // State to hold books and filter term
  const [books, setBooks] = useState([
    { title: "To Kill a Mockingbird", author: "Harper Lee", read: true },
    { title: "1984", author: "George Orwell", read: false },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", read: true },
    { title: "Moby-Dick", author: "Herman Melville", read: false },
    { title: "Pride and Prejudice", author: "Jane Austen", read: true },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", read: false },
    { title: "The Hobbit", author: "J.R.R. Tolkien", read: true },
    { title: "Brave New World", author: "Aldous Huxley", read: false },
    { title: "The Lord of the Rings", author: "J.R.R. Tolkien", read: true },
    { title: "Fahrenheit 451", author: "Ray Bradbury", read: false },
  ]);
  const [filter, setFilter] = useState("all"); // 'all', 'read', 'unread'

  // // Toggle the read status of a book
  // // Function to toggle the read status of a book in the books array
  // const toggleReadStatus = (index) => {
  //   // Create a copy of the current books array to avoid direct mutation
  //   const updatedBooks = [...books];

  //   // Toggle the 'read' property of the book at the specified index
  //   updatedBooks[index].read = !updatedBooks[index].read;

  //   // Update the books state with the modified array of books
  //   setBooks(updatedBooks);
  // };

  // Filter books based on selected status
  const filteredBooks = books.filter((book) => {
    if (filter === "read") return book.read; //return books that have read: true
    if (filter === "unread") return !book.read; //return books that have read: true
    return true; // return all books because we don't have a condition
  });

  return (
    <div style={{marginLeft: '100%', width: '100%'}}>
      <h1>Book List</h1>
      <FilterBooks onFilterChange={setFilter} />
      {/* <BookList books={filteredBooks} onToggleReadStatus={toggleReadStatus} /> */}
      <BookList books={filteredBooks}/>
    </div>
  );
}

export default App;
