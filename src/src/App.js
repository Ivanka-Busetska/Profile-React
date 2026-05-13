import './App.css';
import { BrowserRouter } from "react-router-dom"
import AppRoutes from "./Routes";
import {Header} from "./components/ui/Header";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Header/>
            <AppRoutes/>
        </BrowserRouter>
    </div>
  );
}

export default App;
