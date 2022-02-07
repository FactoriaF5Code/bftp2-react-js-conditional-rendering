import {Link} from "react-router-dom";

const TopNavBar = ({showLoginButton, onLoginChange}) => {

    return <nav className="topBar">
        <Link to="/home">Inicio</Link>
        <Link to="/about">Quienes somos</Link>

        {showLoginButton ?
            <span onClick={() => onLoginChange(true)}>Login</span> :
            <span onClick={() => onLoginChange(false)}>Logout</span>
        }

    </nav>;
}

export default TopNavBar;