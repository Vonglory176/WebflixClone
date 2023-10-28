import { Button, Form } from "react-bootstrap";
import BackgroundSmall from "../assets/images/US-en-20231016-popsignuptwoweeks-perspective_alpha_website_small.jpg";
import RightArrow from "../assets/images/RightArrow.svg"

export default function Landing() {
    return (
    <section id="landing-section">
        <div id="landingBackground-div">
            <div className="backgroundGradient-div"></div>
            <img src={BackgroundSmall}/>
        </div>

        <main>
            <h1>Unlimited movies, TV shows, and more</h1>
            <p>Watch anywhere. Cancel anytime.</p>

            <div className="emailCallToAction-div">
                <p>Ready to watch? Enter your email to create or restart your membership.</p>
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
        </main>
    </section>
    )
}