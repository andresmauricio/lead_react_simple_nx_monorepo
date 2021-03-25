import React from 'react';

function Table({ books }) {
  return (
    <table className="table is-fullwidth is-hoverable">
      <thead>
        <tr>
          <th className="title-5 has-text-info">Id</th>
          <th className="title-5 has-text-info">Kind</th>
          <th className="title-5 has-text-info">Time</th>
          <th className="title-5 has-text-info">Comment</th>
          <th className="title-5 has-text-info">Ip</th>
          <th className="title-5 has-text-info">Number Changes</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <tr key={book.id}>
            <th>{book.id}</th>
            <th>{book.kind}</th>
            <th>{book.timestamp}</th>
            <th>{book.comment}</th>
            <th>{book.ip || new Date().getTime()}</th>
            <th>{book.changes.length}</th>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
