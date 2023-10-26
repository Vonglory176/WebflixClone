import NetflixLogo from "../assets/images/netflixLogo.svg"
import { Button, Form } from "react-bootstrap";

export default function Landing() {
    return (
    <section id="landing-section">
        <header>
            <img src={NetflixLogo} alt="Netflix Logo"/>
            <div>
                <Form.Select aria-label="Language Selector">
                    <option>English</option>
                    <option>Español</option>
                </Form.Select>
                <Button variant="danger">Test</Button>
            </div>
        </header>
        <main>
            <h1>Unlimited movies, TV shows, and more</h1>
            <p>Watch anywhere. Cancel anytime.</p>
            <p>Ready to watch? Enter your email to create or restart your membership.</p>
            <Form>
                <Form.Group className="" controlId="EmailSignUp">
                    <Form.Control type="email" placeholder="Email address"/>
                </Form.Group>
                <Button variant="danger" type="submit">Get Started</Button>
            </Form>
        </main>
    </section>
    )
}