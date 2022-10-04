import './App.less';
import ChatPage from "./pages/ChatPage";
import RegisterPage from "./pages/RegisterPage";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";

function App() {
  return (
    <BrowserRouter>
        <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
