import Cards from "./components/Cards/Cards.jsx";
import Title from "./components/Title/Title.jsx";
import info from "./utils/apartments.json";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <div id="container_app">
      <BrowserRouter>
        <Title />
        <Cards apartments={info} />
      </BrowserRouter>
    </div>
  );
}

export default App;