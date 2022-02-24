import React from 'react'
import Book from "./Book.js"

export default function BookList({books, handleAddbook}) {

  return (
    <div>
      {books.map(book =>{
        return <>
        <Book key={book.id} {...book}/></>
      })}
      <button onClick={handleAddbook}>Add Book</button>
    </div>
  )
}
  