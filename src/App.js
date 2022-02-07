import logo from './logo.svg';
import './App.css';
import TopNavBar from "./TopNavBar";
import Content from "./Content";
import {useState} from "react";
import QuienesSomos from "./QuienesSomos";
import {Route, Routes} from "react-router-dom";

function Footer() {
    return null;
}

function App() {

    const [coders, setCoders] = useState([
        {name: "Candy", tech: "kotlin"},
        {name: "Alisa", tech: "Java"}
    ]);

    // 🚩 flag
    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <div className="App">
            <TopNavBar
                showLoginButton={!loggedIn}
                onLoginChange={(isLogin) => setLoggedIn(isLogin)}/>
            <Routes>
                <Route path="/home" element={<Content coders={coders}/>}/>
                <Route path="/about" element={<QuienesSomos />}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
