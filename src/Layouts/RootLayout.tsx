import React from 'react';
import NavBar from '../Components/Shared/NavBar/NavBar';
import { Outlet } from 'react-router';

const RootLayout = () => {
    return (
            <div>
            <header>
                <NavBar></NavBar>
            </header>
            <main>
                {/* {state === "loading" ? <Loading /> : <Outlet/>} */}
             <Outlet/>
            </main>
            <footer>
                {/* <Footer/> */}
            </footer>
        </div>
    );
};

export default RootLayout;