import Popcorn from "../assets/images/Popcorn.svg"
// import RightArrow from "../assets/images/RightArrow.svg"
import RightArrowSVG from "../assets/images/rightArrow"

export default function AddBanner() {
    return (
        <section id="adBanner-section">
            <div id="adBanner-div">
                <img src={Popcorn} id="adPopcorn-img" alt="Image of popcorn"/>
                <div id="adContentWrapper-div">
                    <p>The Webflix you love for just $6.99.</p>
                    <p>Get the Standard with ads plan.</p>
                    <a href="https://github.com/Vonglory176/WebflixClone" target="_blank">View The Github Repo<RightArrowSVG/>{/*<img src={RightArrow}/>*/}</a> 
                </div>
            </div>
        </section>
    )
}