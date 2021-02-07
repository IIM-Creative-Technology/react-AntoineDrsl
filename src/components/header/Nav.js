import { Link, useLocation } from "react-router-dom";

function Nav() {
    const location = useLocation();

    return(
        <nav>
            <ul>
                <li>
                    <Link to="/" className="link">
                        <span className={location.pathname === "/" ? "active" : ""}>Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/quizz" className="link">
                        <span className={location.pathname === "/quizz" ? "active" : ""}>Quizz</span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;