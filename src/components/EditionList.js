import React from 'react'
import Edition from "./Edition.js"

export default function EditionList({editions}) {
    const edition = editions.map(edition => <Edition key={edition.id} {...edition}/>
         )
  return (
    <div>{
        edition
        }</div>
  )
}
