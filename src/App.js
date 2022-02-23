import "./App.css";
import NavBar from "./components/NavBar";
import BookList from "./components/BookList";
import ThemeContexProvider from "./contexts/ThemeContext";



function App() {
  return (
    <div>
      <ThemeContexProvider>
        <NavBar />
        <BookList books={books}/>
      </ThemeContexProvider>
    </div>
  );
}
const books=[
    {id: 1,
      title: "Da Vinci Code",
      edition: "2013",
      author: "Dan Brown",
      genre: "Mystery, Detective fiction, Conspiracy fiction, Thriller",
      pages: '489',
      theme: 'The Da Vinci Code follows "symbologist" Robert Langdon and cryptologist Sophie Neveu after a murder in the Louvre Museum in Paris causes them to become involved in a battle between the Priory of Sion and Opus Dei over the possibility of Jesus Christ and Mary Magdalene having had a child together.',
      editions: [
        
        {
          id:1,
          title: "--",
          year: "--"
        }
      ] 
    }
      ,
      {id: 2,
        title: "Harry Potter",
        edition: "7(1997-2007)",
        author: "J. K. Rowling",
        genre: "Fantasy",
        pages: '223, 251, 317, 636, 766, 607, 607',
        theme: 'According to Rowling, the main theme is death. Other major themes in the series include prejudice, corruption, and madness.',
        editions:[
          
        {
          id:1,
          title: "Harry Potter and the Sorcerer's Stone",
          year: "1997"
        },
    
        {
          id:1,
          title: "Harry Potter and the Chamber of Secrets",
          year: "1998"
        },
        {
          id:1,
          title: "Harry Potter and the Prisoner of Azkaban",
          year: "1999"
        },
        {
          id:1,
          title: "Harry Potter and the Goblet of Fire",
          year: "2000"
        },
        {
          id:1,
          title: "Harry Potter and the Order of the Phoenix",
          year: "2003"
        },
        {
          id:1,
          title: "Harry Potter and the Half-Blood Prince",
          year: "2005"
        },
        {
          id:1,
          title: "Harry Potter and the Deathly Hallows",
          year: "2007"
        }
        ]
      }
  ]

 

export default App;

