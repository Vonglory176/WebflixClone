import Footer from '../components/Footer.jsx'
import NetflixClone from "../assets/images/Netflix_Clone_Logo_PMS.svg"
import CopyrightBanner from '../components/CopyrightBanner.jsx'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'

export default function Login() {
    return (
        <div id="loginPage-div">
            <header>
                <Link to="/">
                    <img src={NetflixClone} alt="NetflixClone Logo"/>
                </Link>
            </header>

            <section id="login-section">
                <div className="loginWrapper-div">
                    <h1>Sign In</h1>

                    <Form data-bs-theme="dark"> {/* onSubmit={(e) => {e.preventDefault(); window.location.href='/NetflixClone'}} */}
                        <Form.Group className="inputWrapper" controlId="EmailSignIn">
                            <Form.Control type="email" required disabled/>
                        </Form.Group>

                        <Form.Group className="inputWrapper" controlId="PasswordSignIn">
                            <Form.Control type="password" required disabled/>
                        </Form.Group>

                        <Link to="/">
                            <Button type="submit" size="lg">Sign In</Button>
                        </Link>
                        <div id="loginRememberMe-div">
                            <div>
                                <input type='checkbox' name="rememberMe-input"/>
                                <label htmlFor="rememberMe-input">Remember Me</label>
                            </div>
                            <a href="#">Need help?</a>
                        </div>
                    </Form>
                    <p>New to NetflixClone? <a href="#">Sign Up Now</a>.</p>
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