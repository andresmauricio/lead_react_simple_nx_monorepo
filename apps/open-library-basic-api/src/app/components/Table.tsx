import React from 'react';

function Table({ books }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Kind</th>
          <th>Time</th>
          <th>Comment</th>
          <th>Ip</th>
          <th>Number Changes</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <tr key={book.id}>
            <th>{book.id}</th>
            <th>{book.kind}</th>
            <th>{book.timestamp}</th>
            <th>{book.comment}</th>
            <th>{book.ip}</th>
            <th>{book.changes.length}</th>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
