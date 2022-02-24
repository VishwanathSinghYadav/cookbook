import "./App.css";
import React,{useState} from "react"
import NavBar from "./components/NavBar";
import BookList from "./components/BookList";
import ThemeContexProvider from "./contexts/ThemeContext";
import { v4 as uuidv4 } from 'uuid';



function App() {
  
  const [newBookState,setNewBookState]=useState(books)

  return (
    <div>
      <ThemeContexProvider>
        <NavBar />
        <BookList key={uuidv4()} books={books}
        handleAddbook={handleAddbook}
        />
        
      </ThemeContexProvider>
    </div>
  );

  function handleAddbook(){
    const newBook={
      id:uuidv4(),
      title: "",
      edition: "",
      author: "",
      genre: "",
      pages: "",
      theme: "",
      editions:[
        {
          id: uuidv4(),
          title: "--",
          year: "--"
        }
      ]
    }
    setNewBookState([...newBookState, newBook])
  }
}


const books=[
    {id: uuidv4(),
      title: "Da Vinci Code",
      edition: "2013",
      author: "Dan Brown",
      genre: "Mystery, Detective fiction, Conspiracy fiction, Thriller",
      pages: '489',
      theme: 'The Da Vinci Code follows "symbologist" Robert Langdon and cryptologist Sophie Neveu after a murder in the Louvre Museum in Paris causes them to become involved in a battle between the Priory of Sion and Opus Dei over the possibility of Jesus Christ and Mary Magdalene having had a child together.',
      editions: [
        
        {
          id:uuidv4(),
          title: "--",
          year: "--"
        }
      ] 
    }
      ,
      {id: uuidv4(),
        title: "Harry Potter",
        edition: "7(1997-2007)",
        author: "J. K. Rowling",
        genre: "Fantasy",
        pages: '223, 251, 317, 636, 766, 607, 607',
        theme: 'According to Rowling, the main theme is death. Other major themes in the series include prejudice, corruption, and madness.',
        editions:[
          
        {
          id:uuidv4(),
          title: "Harry Potter and the Sorcerer's Stone",
          year: "1997"
        },
    
        {
          id:uuidv4(),
          title: "Harry Potter and the Chamber of Secrets",
          year: "1998"
        },
        {
          id:uuidv4(),
          title: "Harry Potter and the Prisoner of Azkaban",
          year: "1999"
        },
        {
          id:uuidv4(),
          title: "Harry Potter and the Goblet of Fire",
          year: "2000"
        },
        {
          id:uuidv4(),
          title: "Harry Potter and the Order of the Phoenix",
          year: "2003"
        },
        {
          id:uuidv4(),
          title: "Harry Potter and the Half-Blood Prince",
          year: "2005"
        },
        {
          id:uuidv4(),
          title: "Harry Potter and the Deathly Hallows",
          year: "2007"
        }
        ]
      }
  ]

 

export default App;

