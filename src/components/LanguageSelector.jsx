import LanguageIcon from "../assets/images/LanguageIcon.svg"
import { Button, Form } from "react-bootstrap";

export default function LanguageSelector() {
    return (
    <div className="languageSelector-div">
        {/* <img src={LanguageIcon} alt="Language Icon"/> */}
        <Form.Select aria-label="Language Selector" size="sm" data-bs-theme="dark">
            <option>English</option>
            <option>Español</option>
        </Form.Select>
    </div>
    )
}