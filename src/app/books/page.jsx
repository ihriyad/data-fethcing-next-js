import Books from "@/components/books/Books";
import React from "react";

const getBooks = async () => {
  const res = await fetch("http://localhost:5000/books");
  if (!res.ok) {
    throw new Error("Unable to fetch books");
  }
  return res.json();
};

const BooksPage = async () => {
  const books = await getBooks();
  return (
    <div>
      <h2>Total Books: {books.length}</h2>
      <div className="grid grid-cols-3 gap-5">
        {books.map((book) => (
          <Books key={book.id} book={book}></Books>
        ))}
      </div>
    </div>
  );
};

export default BooksPage;
