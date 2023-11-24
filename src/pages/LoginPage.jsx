import Footer from '../components/Footer.jsx'
import NetflixClone from "../assets/images/Netflix_Clone_Logo_PMS.png"
import CopyrightBanner from '../components/CopyrightBanner.jsx'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'

export default function Login() {
    return (
        <div id="loginPage-div">
            <header>
                <Link to="/NetflixClone">
                    <img src={NetflixClone}/>
                </Link>
            </header>

            <section id="login-section">
                <h1>Sign In</h1>
                <Form data-bs-theme="dark" onSubmit={(e) => {e.preventDefault(); window.location.href='/'}}>
                    <Form.Group className="inputWrapper" controlId="EmailSignUp">
                        {/* <Form.Label>Email address</Form.Label> */}
                        <Form.Control type="email" placeholder='Email or phone number' required disabled/>
                        <Form.Control type="password" placeholder='Password' required disabled/>
                    </Form.Group>
                    <Button type="submit" size="lg">
                        Sign In
                    </Button>
                    <div>
                        <input type='checkbox' name="rememberMe-input"/>
                        <label for="rememberMe-input">Remember Me</label>
                        <a>Need help?</a>
                    </div>
                    <p>New to NetflixClone? <a>Sign Up Now</a>.</p>
                    <span>Keep in mind that this is a portfolio project and not actually Netflix. Please do not enter any personal information. <a href="https://github.com/Vonglory176/NetflixClone" target="_blank">View The Github Repo</a></span>
                </Form>
            </section>

            <Footer/>
            <CopyrightBanner/>
        </div>
    )
}