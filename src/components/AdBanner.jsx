import Popcorn from "../assets/images/Popcorn.svg"
// import RightArrow from "../assets/images/RightArrow.svg"
import RightArrowSVG from "../assets/images/rightArrow"

export default function AddBanner() {
    return (
        <section id="adBanner-section">
            <div id="adBanner-div">
                <img src={Popcorn} id="adPopcorn-img"/>
                <div id="adContentWrapper-div">
                    <p>The Netflix you love for just $6.99.</p>
                    <p>Get the Standard with ads plan.</p>
                    <a href="#">Learn More<RightArrowSVG/>{/*<img src={RightArrow}/>*/}</a> 
                </div>
            </div>
        </section>
    )
}