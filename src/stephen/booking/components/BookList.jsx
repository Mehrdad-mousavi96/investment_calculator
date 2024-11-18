import BookShow from "./BookShow";

const BookList = ({ books, onDelete, onEdit }) => {
  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>
          <BookShow book={book} onDelete={onDelete} onEdit={onEdit} />
          <hr />
        </li>
      ))}
    </ul>
  );
};

export default BookList;
