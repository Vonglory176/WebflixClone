import TVImage from "../assets/images/tv.png"
import TVVideo from "../assets/videos/video-tv-0819.mp4"

import WatchImage from "../assets/images/device-pile.png"
import WatchVideo from "../assets/videos/video-devices.mp4"

import CreateImage from "../assets/images/kids.png"

import DownloadImage1 from "../assets/images/mobile-0819.jpg"
import DownloadImage2 from "../assets/images/boxshot.png"
import DownloadImage3 from "../assets/images/download-icon.gif"

import Accordion from 'react-bootstrap/Accordion';
import Plus from "../assets/images/plusIcon.svg"

import EmailSignUp from "./EmailSignUp";


export default function FeaturesAndQuestions() {
    let accordianData = [
        {
            title:<span>What is NetflixClone?</span>,
            body:<span>
                    <p>NetflixClone is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.</p>
                    <p>You can watch as much as you want, whenever you want - all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!</p>
                </span>
        },
        {
            title:<span>How much does NetflixClone cost?</span>,
            body:<span>
                    <p>Watch NetflixClone on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $6.99 to $22.99 a month. No extra costs, no contracts.</p>
                </span>
        },
        {
            title:<span>What can I watch?</span>,
            body:<span>
                    <p>Watch anywhere, anytime. Sign in with your NetflixClone account to watch instantly on the web at netflixclone.com from your personal computer or on any internet-connected device that offers the NetflixClone app, including smart TVs, smartphones, tablets, streaming media players and game consoles.</p>
                    <p>You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take NetflixClone with you anywhere.</p>
                </span>
        },
        {
            title:<span>How do I cancel?</span>,
            body:<span>
                    <p>NetflixClone is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees - start or stop your account anytime.</p>
                </span>
        },
        {
            title:<span>What can I watch on NetflixClone?</span>,
            body:<span>
                    <p>NetflixClone has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</p>
                </span>
        },
        {
            title:<span>Is NetflixClone good for kids?</span>,
            body:<span>
                    <p>The NetflixClone Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.</p>
                    <p>Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don't want kids to see.</p>
                </span>
        }
    ]

    let accordianItems = []
    for (let i=0; i<accordianData.length; i++) {
        accordianItems.push(
            <Accordion.Item eventKey={i}>
                <Accordion.Header>{accordianData[i].title}</Accordion.Header>
                <Accordion.Body>{accordianData[i].body}</Accordion.Body>
            </Accordion.Item>
            )
    }

    return (
        <section id="featuresAndQuestions-section">
            <div id="features-div">
                <div id="tvFeature-div" className="feature-div">
                    <div className="contentWrap-div">
                        <div className="featureTitle-div">                            
                            <h1>Enjoy on your TV</h1>
                            <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
                        </div>
                        <div id="tvFeatureImage-div" className="featureImage-div">
                            <img src={TVImage} className="img-fluid"/>
                            <div className="videoWrapper-div">
                                <video src={TVVideo} muted loop autoPlay/>
                            </div>
                        </div>
                    </div>
                    <div className="separator-div"></div>      
                </div>

                <div id="watchFeature-div" className="feature-div">
                    <div className="contentWrap-div">
                        <div className="featureTitle-div">                            
                            <h1>Watch everywhere</h1>
                            <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                        </div>
                        <div id="watchFeatureImage-div" className="featureImage-div">
                            <img src={WatchImage} className="img-fluid"/>
                            <div className="videoWrapper-div">
                                <video src={WatchVideo} muted loop autoPlay/>
                            </div>
                        </div>
                    </div>
                    <div className="separator-div"></div>
                </div>

                <div id="createFeature-div" className="feature-div">
                    <div className="contentWrap-div">
                        <div className="featureTitle-div">                            
                            <h1>Create profiles for kids</h1>
                            <p>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p>
                        </div>
                        <div className="featureImage-div">
                            <img src={CreateImage} className="img-fluid"/>
                        </div>
                    </div>
                    <div className="separator-div"></div>
                </div>

                <div id="downloadFeature-div" className="feature-div">
                    <div className="contentWrap-div">
                        <div className="featureTitle-div">                            
                            <h1>Download your shows to watch offline</h1>
                            <p>Only available on ad-free plans.</p>
                        </div>

                        <div className="featureImage-div">
                            <img src={DownloadImage1} className="img-fluid"/>

                            <div className="imageInner-div">
                                <img src={DownloadImage2} className="img-fluid"/>
                                <div>
                                    <span>Stranger Things</span>
                                    <span>Downloading...</span>
                                </div>
                                <img src={DownloadImage3} className="img-fluid"/>
                            </div>
                        </div>
                    </div>
                    <div className="separator-div"></div>
                </div>
            </div>
            <div id="questions-div">
                <div className="contentWrap-div">                    
                    <h1>Frequently Asked Questions</h1>

                    <Accordion>
                        {accordianItems}
                    </Accordion>
                    
                    <EmailSignUp/>
                </div>
                <div className="separator-div"></div>
            </div>
        </section>
    )
}