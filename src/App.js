import {
  Routes,
  Route,
  useLocation,
  useNavigate,
  Navigate,
} from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { HomePage } from "./pages/HomePage";
import { AboutUs } from "./pages/AboutUs";
import { CharacterList } from "./pages/CharacterList";
import { useEffect, useState } from "react";
import { getCharactersAction } from "./store/characters/actions";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "./store/user/actions";
import { AuthRoute } from "./containers/AuthRoute";
import { isAuthSelector } from "./store/user/selectors";

export const Login = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const user = useSelector(isAuthSelector);

  // useEffect(() => {
  //   if (user !== null) {
  //     navigate(location.state?.from);
  //   }
  // }, [location, navigate, user]);

  return (
    <>
      <span>from {location.state?.from}</span>
      {user !== null && <Navigate to={location.state?.from} />}
      <button onClick={() => dispatch(loginAction())}>Login</button>
    </>
  );
};

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharactersAction());
  }, [dispatch]);
  const [first, setFirst] = useState(Math.random());
  return (
    <>
      <Navigation />
      <Routes>
        {/* <Route path='/'  element={} > */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route
          path="/:id"
          element={
            <AuthRoute>
              <CharacterList />
            </AuthRoute>
          }
        />
        {/* </Route> */}
      </Routes>
    </>
  );
}

export default App;
