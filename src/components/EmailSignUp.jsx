import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
// import RightArrow from "../assets/images/RightArrow.svg"
import RightArrowSVG from "../assets/images/rightArrow";

//https://stackoverflow.com/questions/72984395/react-js-how-to-redirect-on-form-submit

export default function EmailSignUp() {
    return (
    <div className="emailSignUp-div">
        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
        <Form data-bs-theme="dark" onSubmit={(e) => {e.preventDefault(); window.location.href='NetflixClone/Login'}}>
            <Form.Group className="inputWrapper" controlId="EmailSignUp">
                {/* <Form.Label>Email address</Form.Label> */}
                <Form.Control type="email" required disabled/>
            </Form.Group>
            <Button type="submit" size="lg">
                Get Started
                <RightArrowSVG/>
            </Button>
        </Form>
    </div>
    )
}