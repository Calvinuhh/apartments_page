import Cards from "./components/Cards/Cards.jsx";
import Title from "./components/Title/Title.jsx";
import info from "./utils/apartments.apartments.json";

function App() {
  return (
    <>
      <Title />
      <Cards apartments={info} />
    </>
  );
}

export default App;
