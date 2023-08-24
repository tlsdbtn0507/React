import Counter from "./components/Counter";
import Header from "../src/components/Header";
import Auth from "../src/components/Auth";
import UserProfile from "../src/components/UserProfile";

import { useSelector } from "react-redux";

function App() {
  const { isLogined } = useSelector((state) => state.auth);

  return (
    <>
      <Header />
      {isLogined ? <UserProfile /> : <Auth />}
      <Counter />
    </>
  );
}

export default App;
