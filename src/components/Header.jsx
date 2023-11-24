import NetflixLogo from "../assets/images/Netflix_Clone_Logo_PMS.png" //netflixLogo.svg"
import { Link } from "react-router-dom";
import LanguageSelector from "./LanguageSelector";
import { Button } from "react-bootstrap";

export default function Header() {
    return (
    <section id="header-section">
        <header>
            <img src={NetflixLogo} alt="Netflix Logo"/>
            <div className="buttonGroup-div">
                <LanguageSelector/>
                <Link to="/NetflixClone/Login">
                    <Button variant="danger" size="sm" style={{height:"100%"}}>Sign In</Button>
                </Link>
            </div>
        </header>
    </section>
    )
}