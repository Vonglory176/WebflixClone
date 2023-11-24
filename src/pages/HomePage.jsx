import Header from '../components/header.jsx'
import Landing from '../components/Landing.jsx'
import AdBanner from '../components/AdBanner.jsx'
import FeaturesAndQuestions from '../components/FeaturesAndQuestions.jsx'
import Footer from '../components/Footer.jsx'
import CopyrightBanner from '../components/CopyrightBanner.jsx'

export default function Home() {
    return (
    <>
        <Header/>
        <Landing/>
        <AdBanner/>
        <FeaturesAndQuestions/>
        <Footer/>
        <CopyrightBanner/>
    </>
    )
}