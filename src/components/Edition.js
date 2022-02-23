import React from 'react'

export default function Edition(props) {
    const {id,title,year}= props
  return (
    <div>
        <div>Editions: </div>
        <div>Title: {title}</div>
        <div>Year: {year}</div>
        </div>
  )
}
