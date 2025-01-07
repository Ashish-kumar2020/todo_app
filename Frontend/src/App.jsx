import "./App.css";
import { useSelector } from "react-redux";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import Signin from "./components/Signin";
import Signup from "./components/Signup";

function App() {
  const isSideNavVisible = useSelector((state) => state.visibility.isVisible);
  console.log(isSideNavVisible); // Logs the current state (true or false)

  return (
    <>
      {/* <Signup /> */}
      <Header />
      <SideNav />
      {/* <Signin /> */}
    </>
  );
}

export default App;
