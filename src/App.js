import "./App.css";
import NavBar from "./components/NavBar";
import BookList from "./components/BookList";
import ThemeContexProvider from "./contexts/ThemeContext";

function App() {
  return (
    <div>
      <ThemeContexProvider>
        <NavBar />
        <BookList />
      </ThemeContexProvider>
    </div>
  );
}

export default App;

