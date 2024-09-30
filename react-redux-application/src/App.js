import "./App.css";
import ListForm from "./components/listForm";
import PostForm from "./components/postForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PostForm />
        <ListForm />
      </header>
    </div>
  );
}

export default App;
