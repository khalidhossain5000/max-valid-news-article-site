import Footer from "../Components/Shared/Footer/Footer";
import NavBar from "../Components/Shared/NavBar/NavBar";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <div>
      <header className="fixed top-0 left-0 z-50 w-full ">
        <NavBar></NavBar>
      </header>
      <main>
        {/* {state === "loading" ? <Loading /> : <Outlet/>} */}
        <Outlet />
      </main>
      <footer><Footer/></footer>
    </div>
  );
};

export default RootLayout;
