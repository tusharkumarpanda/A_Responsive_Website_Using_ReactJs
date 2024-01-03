import Common from "./Common"
import web from '../../Image/img2.jpg'


function Home() {
    return (
        <>
            <Common name="Grow your business with" imgsrc={web} visit="/service" btn_name="Get Started"/>
        </>
    )
}

export default Home
