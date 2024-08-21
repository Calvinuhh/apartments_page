import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./views/Main";
import MainSpanish from "./views/MainSpanish";
import "./index.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/spanish" element={<MainSpanish />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
