import Image from "next/image";
import typingImage from "@/public/typing-bro.svg";
import DotsDesign from "./dotsDesign";
import Button from "./Button";
import { AiOutlineDownload } from "react-icons/ai";
import BoxDesign from "./BoxDesign";
import Skills from "./Skills";

export default function AboutMe({ id }) {
    
    return (
        <div id={id}>
            <div className="w-full py-6 flex items-center">
                <div className="w-full md:w-3/4 md:pr-4">
                    <p className="text-sm pb-6">
                    Hi, I&apos;m Roshith Krishna P, an MSc Computer Science graduate from St. Joseph&apos;s College (Autonomous) Devagiri, Kozhikode.<br /><br />
                    I&apos;m passionate about technology, with a focus on web development, particularly front-end technologies like React and NextJS. My current interests also extend to Generative AI, a field I&apos;m actively exploring.<br/><br/>
                    As a strong believer in community-driven learning, I co-founded <a className="text-purple" href="https://evolvates.org">Evolvates</a>, a student community promoting peer-to-peer and self-learning approaches. I also serve as the Advisor of this initiative. Additionally, I Lead the <a className="text-purple" href="https://www.tinkerhub.org/campus/2914/St.%20Joseph's%20College%20Devagiri">Tinkerhub</a> Community at <a className="text-purple" href="https://devagiricollege.org">St.Joseph&apos;s College, Devagiri</a>.<br/><br/>
                    In recognition of my leadership and engagement in global discussions, I was selected as a <span className="text-purple">Delegate for the HPAIR Asia Conference 2024 in Bangkok</span>, where I had the opportunity to collaborate with international leaders, entrepreneurs, and academics on pressing global issues.<br /><br />
                    </p>
                    <Button name='Resume' icon={<AiOutlineDownload/>} link="https://roshith.tiiny.site/" external={true}/>
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
