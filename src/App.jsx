
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import NotFound from "./Components/NotFound";
import { useContextGlobal } from "./Components/utils/global.context";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import Home from "./Routes/Home";


function App() {

  const {state} = useContextGlobal()

  return (
      <div className={state.theme + " App"}>
          <Navbar/>
          <main>
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/contact" element={<Contact />}/>
              <Route path="/favs" element={<Favs />}/>
              <Route path="/detail/:id" element={<Detail />}/>
              <Route path="*" element={<NotFound />}/>
            </Routes>
          </main>
          <Footer/>
      </div>
  );
}

export default App;
