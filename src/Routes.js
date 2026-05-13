import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import MyCityPage from "./pages/MyCityPage";
import MyFuturePage from "./pages/MyFuturePage";


const AppRoutes = () => {
    return (
        <Routes>
            <Route path={"/"} element={<HomePage/>} />
            <Route path={'/about'} element={<AboutPage/>}/>
            <Route path={'/my-city'} element={<MyCityPage/>}/>
            <Route path={'/my-future'} element={<MyFuturePage/>}/>
        </Routes>
    );
};

export default AppRoutes;