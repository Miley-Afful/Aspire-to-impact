import Navbar from '../Navbar'
import HeroSection from '../Hero'
import AboutSection from '../AboutUs'
import OurMission from '../Mission'
import ProgramsSection from '../Programs'
import GetInvolved from '../GetInvolved'
import BlogSection from '../Blog'
import Footer from '../Footer'
import TeamSection from '../Team'

const Home = () => {
  return (
   <div>
    <Navbar />
    <HeroSection />
    <AboutSection />
    <OurMission />
    <ProgramsSection />
    {/* <GetInvolved /> */}
    <TeamSection />
    <BlogSection />
    <Footer />
   </div>
  )
}

export default Home