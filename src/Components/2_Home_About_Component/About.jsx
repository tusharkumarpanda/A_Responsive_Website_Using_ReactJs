import Common from "./Common"
import web from '../../Image/img3.jpg'

function About() {
    return (
        <>
            <Common name="Welcome to About page" imgsrc={web} visit="/contact" btn_name="Contact Now"/>
        </>
    )
}

export default About
