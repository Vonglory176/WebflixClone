import Footer from '../components/Footer.jsx'
import NetflixClone from "../assets/images/Netflix_Clone_Logo_PMS.svg"
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
                <div className="loginWrapper-div">
                    <h1>Sign In</h1>
                    <Form data-bs-theme="dark" onSubmit={(e) => {e.preventDefault(); window.location.href='/'}}>
                        <Form.Group className="inputWrapper" controlId="SignUp">
                            {/* <Form.Label>Email address</Form.Label> */}
                            <Form.Control type="email" placeholder='Email or phone number (Disabled)' required disabled/>
                            <Form.Control type="password" placeholder='Password (Disabled)' required disabled/>
                        </Form.Group>
                        <Button type="submit" size="lg">
                            Sign In
                        </Button>
                        <div id="loginRememberMe-div">
                            <div>
                                <input type='checkbox' name="rememberMe-input"/>
                                <label htmlFor="rememberMe-input">Remember Me</label>
                            </div>
                            <a>Need help?</a>
                        </div>
                    </Form>
                    <p>New to NetflixClone? <a>Sign Up Now</a>.</p>
                    <p>Keep in mind that this is a portfolio project and not actually Netflix. Please do not enter any personal information. <a href="https://github.com/Vonglory176/NetflixClone" target="_blank">View The Github Repo.</a></p>

                    {/* GOOGLE CAPTCHA LOGIN/NOTICE WOULD GO HERE */}

                </div>
            </section>
            <div id="footerWrapper-div">
                <Footer/>
            </div>
            <CopyrightBanner/>
        </div>
    )
}