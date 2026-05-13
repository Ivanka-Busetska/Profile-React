import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import MyCityPage from "./pages/MyCityPage";
import MyFuturePage from "./pages/MyFuturePage";


const AppRoutes = () => {
    return (
        <Routes>
            <Route path={"/Profile-React"} element={<HomePage/>} />
            <Route path={'Profile-React/about'} element={<AboutPage/>}/>
            <Route path={'Profile-React/my-city'} element={<MyCityPage/>}/>
            <Route path={'Profile-React/my-future'} element={<MyFuturePage/>}/>
        </Routes>
    );
};

export default AppRoutes;