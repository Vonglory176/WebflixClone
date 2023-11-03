import { Button, Form } from "react-bootstrap";
import RightArrow from "../assets/images/RightArrow.svg"

export default function EmailSignUp() {
    return (
    <div className="emailSignUp-div">
        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
        <Form data-bs-theme="dark">
            <Form.Group className="" controlId="EmailSignUp">
                <Form.Control type="email" placeholder="Email address" required/>
            </Form.Group>
            <Button type="submit" size="lg">
                Get Started
                <img src={RightArrow}/>
            </Button>
        </Form>
    </div>
    )
}