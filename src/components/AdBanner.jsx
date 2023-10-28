import Popcorn from "../assets/images/Popcorn.svg"
import RightArrow from "../assets/images/RightArrow.svg"

export default function AddBanner() {
    return (
        <section id="adBanner-section">
            <div id="adBanner-div">
                <img src={Popcorn}/>
                <p>The Netflix you love for just $6.99.</p>
                <p>Get the Standard with ads plan.</p>
                <a><span>Learn More</span> <img src={RightArrow}/></a>
            </div>
        </section>
    )
}