import React, { useState } from 'react'
import BookCreate from './components/BookCreate'

const App_ = () => {
    const [books, setBooks] = useState([])

    const handleCreateBook = (title) => {
        console.log("Need to add book with:", title)
    }
     
  return (
    <div>
        <BookCreate onCreate={handleCreateBook} />
    </div>
  )
}

export default App_