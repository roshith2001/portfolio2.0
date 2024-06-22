import Image from "next/image";
import typingImage from "@/public/typing-bro.svg";
import DotsDesign from "./dotsDesign";
import Button from "./Button";
import { AiOutlineDownload } from "react-icons/ai";
import BoxDesign from "./BoxDesign";
import Skills from "./Skills";
import resume from "@/public/resume.pdf"

export default function AboutMe({ id }) {
    return (
        <div id={id}>
            <div className="w-full py-6 flex items-center">
                <div className="w-full md:w-3/4 md:pr-4">
                    <p className="text-sm pb-6">
                        Hi, I am Roshith Krishna P.<br /><br />
                        As a passionate and self-taught web developer, I have honed my skills through countless hours of hands-on experience and continuous learning. My journey into the world of web development began out of sheer curiosity and has transformed into a deep-seated passion. Specializing in both front-end and back-end technologies, I thrive on creating dynamic and responsive websites that offer seamless user experiences.<br /><br />
                        Over the years, Ive mastered a variety of programming languages and frameworks, including HTML, CSS, JavaScript, and React. My commitment to staying updated with the latest industry trends ensures that my projects are always built with cutting-edge technologies. I take pride in my ability to solve complex problems and deliver robust, scalable solutions that meet clients needs and exceed their expectations.
                    </p>
                    <Button name='Resume' icon={<AiOutlineDownload/>} link="public\resume.pdf " external={true}/>
                </div>
                <div className="hidden md:block w-1/4">
                    <div className="relative">
                        <DotsDesign row={4} col={3} left={20} top={10} />
                        <Image src={typingImage} alt="Typing on Keyboard"/>
                        <DotsDesign row={3} col={3} right={10} bottom={-10} />
                    </div>
                </div>
                <BoxDesign className='hidden md:block' len={40} bre={100} left={0} top={1900}/>
            </div>
            <Skills />
        </div>
    );
}
