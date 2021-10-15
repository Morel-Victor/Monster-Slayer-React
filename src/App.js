import "./App.css";
import GifCard from "./Components/GifCard/GifCard";
import NavBar from "./Components/NavBar/NavBar";

function App() {
    return (
        <div className="App">
            <NavBar />
            <GifCard />
            <GifCard />
        </div>
    );
}

export default App;
