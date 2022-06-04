import { Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { HomePage } from "./pages/HomePage";
import { AboutUs } from "./pages/AboutUs";
import { CharacterList } from "./pages/CharacterList";
import { useEffect } from "react";
import { getCharactersAction } from "./store/characters/actions";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharactersAction());
  }, [dispatch]);

  return (
    <>
      <Navigation />
      <Routes>
        {/* <Route path='/'  element={} > */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/:familyName" element={<CharacterList />} />
        {/* </Route> */}
      </Routes>
    </>
  );
}

export default App;
