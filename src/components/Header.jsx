import WebflixLogo from "../assets/images/Webflix_Clone_Logo_PMS.png" //webflixLogo.svg"
import { Link } from "react-router-dom";
import LanguageSelector from "./LanguageSelector";
import { Button } from "react-bootstrap";

export default function Header() {
    return (
    <section id="header-section">
        <header>
            <Link to="/">
                <img src={WebflixLogo} alt="WebflixClone Logo"/>
            </Link>
            <div className="buttonGroup-div">
                <LanguageSelector/>
                <Link to="/login">
                    <Button variant="danger" size="sm" style={{height:"100%"}}>Sign In</Button>
                </Link>
            </div>
        </header>
    </section>
    )
}