import Link from "next/link";
import React from "react";

const Books = ({ book }) => {
  const { id, title, author, price } = book;
  return (
    <div className="card card-border bg-base-100 w-96">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>Author:{author}</p>
        <p>Price: {price}</p>
        <div className="card-actions justify-end">
          <Link href={`/books/${id}`}>
            <button className="btn btn-primary">Show Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Books;
