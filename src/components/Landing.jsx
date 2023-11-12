import EmailSignUp from "./EmailSignUp";
// import BackgroundSmall from "../assets/images/US-en-20231016-popsignuptwoweeks-perspective_alpha_website_small.jpg";

export default function Landing() {
    return (
    <section id="landing-section">
        <div id="landingBackground-div">
            <div className="backgroundGradient-div"></div>
            {/* <img src={BackgroundSmall}/> */}
        </div>

        <main>
            {/* <h1>Unlimited movies, TV shows, and more</h1> */}
            <h1>This is a sample site by Skyler Conley</h1>
            <p>Watch anywhere. Cancel anytime.</p>
            {/* <p>Not actually Netflix, just a portfolio project.</p> */}

            <EmailSignUp/>
        </main>
    </section>
    )
}