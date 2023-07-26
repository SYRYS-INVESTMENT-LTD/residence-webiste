import React from 'react'
import Navbar from '../Components/Navbar'
import HeroSection from '../Components/HeroSection'
import RedesignServices from '../Components/RedesignServices'
/*import OurServices from '../Components/OurServices'*/
import Apartments from '../Components/Apartments'
import WhoWeAre from '../Components/WhoWeAre'
import FAQ from '../Components/FAQ'
import Footer from '../Components/Footer'

function LandingPage() {
    return (
        <div>
            <div className='bg-hero bg-cover'>
                <Navbar />
                <HeroSection />
            </div>
            {/*<OurServices />*/}
            <RedesignServices/>
            <Apartments/>
            <WhoWeAre />
            <FAQ />
            <Footer />
        </div>
    )
}

export default LandingPage