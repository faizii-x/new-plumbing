import AboutBanner from "../components/aboutBanner"
import AboutStart from "../components/aboutStart"
import Counter from "../components/counter"
import ImageAbout from "../components/iamgeAbout"
import SecondAbout from "../components/secondAbout"
import TextAbout from "../components/textAbout"
import ContactHome from "../components/contactHome"

function About() {
  return (
    <>
    
   <AboutStart/>
   <SecondAbout/>
   <Counter/>
   <TextAbout/>
   <AboutBanner/>
    <ImageAbout/>
    <ContactHome/>
    </>
  )
}

export default About