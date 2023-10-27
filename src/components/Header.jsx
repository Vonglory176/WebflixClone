import { Button, Form } from "react-bootstrap";
import NetflixLogo from "../assets/images/netflixLogo.svg"
import LanguageIcon from "../assets/images/LanguageIcon.svg"

export default function Header() {
    return (
    <section id="header-section">
        <header>
            <img src={NetflixLogo} alt="Netflix Logo"/>
            <div className="languageSelector-div">
                <img src={LanguageIcon} alt="Language Icon"/>
                <Form.Select aria-label="Language Selector" size="sm" data-bs-theme="dark">
                    <option>English</option>
                    <option>Español</option>
                </Form.Select>
                <Button variant="danger" size="sm">Sign In</Button>
            </div>
        </header>
    </section>
    )
}