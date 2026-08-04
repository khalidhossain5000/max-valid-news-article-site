import Footer from "../Components/Shared/Footer/Footer";
import GlobalLoader from "../Components/Shared/Loading/GlobalLoader";
import NavBar from "../Components/Shared/NavBar/NavBar";
import { Outlet, useNavigation } from "react-router";

const RootLayout = () => {
      const { state } = useNavigation();

  return (
    <div>
      <header className="fixed top-0 left-0 z-50 w-full ">
        <NavBar></NavBar>
      </header>
      <main>
        {state === "loading" ? <GlobalLoader /> : <Outlet/>}
   
      </main>
      <footer><Footer/></footer>
    </div>
  );
};

export default RootLayout;
