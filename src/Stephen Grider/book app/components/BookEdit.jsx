import React, { useState } from 'react'

const BookEdit = ({book, onSubmit}) => {

    const [title, setTitle] = useState(book.title)

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(book.id, title)
    }

  return (
    <form onSubmit={handleSubmit}>

        <label htmlFor="">Title</label>
        <input value={title} onChange={e => setTitle(e.target.value)} />
         <button onClick={handleSubmit}>save</button>
    </form>
  )
}
export default BookEdit