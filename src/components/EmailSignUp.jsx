import { Button, Form } from "react-bootstrap";
// import RightArrow from "../assets/images/RightArrow.svg"
import RightArrowSVG from "../assets/images/rightArrow";

export default function EmailSignUp() {
    return (
    <div className="emailSignUp-div">
        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
        <Form data-bs-theme="dark">
            <Form.Group className="inputWrapper" controlId="EmailSignUp">
                {/* <Form.Label>Email address</Form.Label> */}
                <Form.Control type="email" required/> {/*placeholder="Email address"*/}
            </Form.Group>
            <Button type="submit" size="lg">
                Get Started
                {/* <img src={RightArrow}/> */}
                <RightArrowSVG/>
            </Button>
        </Form>
    </div>
    )
}