import React from 'react'
import Book from "./Book.js"

export default function BookList({books}) {

  return (
    <div>
      {books.map(book =>{
        return <>
        <Book key={book.id} {...book}/></>
      })}
    </div>
  )
}
  