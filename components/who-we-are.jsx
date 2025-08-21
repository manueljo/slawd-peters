import Image from "next/image"
import WhoWeAreImage from "../public/images/hero.jpg"

const WhoWeAre = () => {
    return(
        <section className='min-h-screen w-full max-w-[1440px] mx-auto px-4 py-8 flex items-center justify-around flex-col-reverse md:flex-row gap-10'>
            <div>
                <Image src={WhoWeAreImage} alt="who we are" className="md:max-w-[400px] rounded-2xl"/>
            </div>
            <div className="max-w-[500px]">
                <h2 className="text-3xl md:text-5xl font-bold">Who We Are</h2>
                <p className="text-lg mt-4">
                    SLAWD PETERS Engineering was founded in 1970 with a mission to become a one-stop powerhouse for mechanical engineering solutions and technical skills development in Nigeria. With over 50 years of experience, we have built a reputation for excellence in metal fabrication, NDT, design, manufacturing, mill installation, corrosion control, and more.
                </p>
            </div>
        </section>
    )
}

export default WhoWeAre