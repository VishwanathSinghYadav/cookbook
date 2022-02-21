import React from 'react'

export default function Book() {
  return (
    <div>
        <div>
            <h3>Harry Potter</h3>
            <div>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>
        <div>
            <span>Edition: </span>
            <span>7(1997-2007)</span>
        </div>
        <div>
            <span>Author: </span>
            <span>J. K. Rowling</span>
        </div>
        <div>
            <span>Genre: </span>
            <span>Fantasy</span>
        </div>
        <div>
            <span>Pages: </span>
            <span>223, 251, 317, 636, 766, 607, 607</span>
        </div>
        <div>
            <span>Theme: </span>
            <span>According to Rowling, the main theme is death. Other major themes in the series include prejudice, corruption, and madness.</span>
        </div>
    </div>
  )
}
