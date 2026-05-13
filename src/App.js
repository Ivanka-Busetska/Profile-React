import './App.css';
import {HashRouter} from "react-router-dom"
import AppRoutes from "./Routes";
import {Header} from "./components/ui/Header";

function App() {
  return (
    <div className="App">
        <HashRouter>
            <Header/>
            <AppRoutes/>
        </HashRouter>
    </div>
  );
}

export default App;
