import Accueil from "./Pages/Accueil/Accueil";
import Template from "./Partials/Template/Template";

import Annonces from "./Pages/Annonces/Annonces";
import AnnonceDetail from "./Pages/Detail/Detail";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Template />}>
            <Route exact path="/" element={<Accueil />} />
            <Route exact path="/detail/:id" element={<AnnonceDetail />} />
            <Route exact path="/annonces" element={<Annonces />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
