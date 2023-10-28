import NetflixLogo from "../assets/images/netflixLogo.svg"
import LanguageSelector from "./LanguageSelector";
import { Button } from "react-bootstrap";

export default function Header() {
    return (
    <section id="header-section">
        <header>
            <img src={NetflixLogo} alt="Netflix Logo"/>
            <div className="buttonGroup-div">
                <LanguageSelector/>
                <Button variant="danger" size="sm">Sign In</Button>
            </div>
        </header>
    </section>
    )
}