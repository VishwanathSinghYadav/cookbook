import React from 'react'
import EditionList from './EditionList'

export default function Book(props) {
  const {title,edition,author,genre,pages,theme, editions}=props
    return (
    <div>
        <div>
            <h3>{title}</h3>
            <div>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>
        <div>
            <span>Edition: </span>
            <span>{edition}</span>
        </div>
        <div>
            <span>Author: </span>
            <span>{author}</span>
        </div>
        <div>
            <span>Genre: </span>
            <span>{genre}</span>
        </div>
        <div>
            <span>Pages: </span>
            <span>{pages}</span>
        </div>
        <div>
            <span>Theme: </span>
            <span>{theme}</span>
        </div>
        <div>
            <EditionList editions={editions}/>
        </div>
    </div>
  )
}
