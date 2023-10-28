import LanguageSelector from "./LanguageSelector.jsx"

export default function Footer() {
    return (
        <footer>
            <div className="phoneInformation-div"><span>Questions? Call</span> <a href="tel:#">1-XXX-XXX-XXXX</a></div>
            <ul>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Account</a></li>
                <li><a href="#">Media Center</a></li>
                <li><a href="#">Investor Relations</a></li>
                <li><a href="#">Jobs</a></li>
                <li><a href="#">Netflix Shop</a></li>
                <li><a href="#">Reedeem Gift Cards</a></li>
                <li><a href="#">Buy Gift Cards</a></li>
                <li><a href="#">Ways to Watch</a></li>
                <li><a href="#">Terms of Use</a></li>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Cookie Preferences</a></li>
                <li><a href="#">Corperate Information</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Speed Test</a></li>
                <li><a href="#">Legal Notices</a></li>
                <li><a href="#">Only on Netflix</a></li>
                <li><a href="#">Do Not Sell or Share My Personal Information</a></li>
                <li><a href="#">Ad Choices</a></li>
            </ul>
            <LanguageSelector/>
        </footer>
    )
}