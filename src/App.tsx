import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import "./App.css";
import Main from "./Routes/Main"
import Search from "./Routes/Search";
import Login from './Routes/Login';
import SignUp from './Routes/SignUp';
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/search" element={<Search />}></Route>
                <Route path="/Login" element={<Login />}></Route>
                <Route path="/SignUp" element={<SignUp />}></Route>
                <Route path="/" element={<Main />}>
                </Route>
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;