import React from "react";

const generateStaticParams = async () => {
  const res = await fetch("http://localhost:5000/books");
  const books = await res.json();
  return books.map((book) => ({ bookId: book.id }));
};

const BookDetailsPage = async ({ params }) => {
  const { bookId } = await params;
  const res = await fetch(`http://localhost:5000/books/${bookId}`);
  const { title, author, price } = await res.json();
  return (
    <div>
      <h3>Name:{title}</h3>
      <p>Author: {author}</p>
      <p>Price: {price}</p>
    </div>
  );
};

export default BookDetailsPage;
