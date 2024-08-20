import Cards from "./components/Cards/Cards.jsx";
import Title from "./components/Title/Title.jsx";
import info from "./utils/apartments.json";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Title />
        <Cards apartments={info} />
      </BrowserRouter>
    </>
  );
}

export default App;
