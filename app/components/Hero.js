import Image from "next/image";
import heroImage from '@/public/Hero_Image.png'
import Button from "./Button";
import { VscArrowDown } from "react-icons/vsc";

export default function Hero() {
    return (
        <div className="w-full h-screen flex justify-center absolute top-20">
            <div className="w-5/6 pt-32 flex">
                {/*Text Section*/}
                <div className="w-full md:w-2/3">
                    <p className="text-4xl font-semibold">
                        Hi, there<br/>
                        <span className="text-purple">Roshith Krishna</span> here!
                    </p>
                    <p className="text-grey mt-12 md:mt-20 mb-12 md:mb-16">
                        I’m currently into frontend-dev, designing,<br className="hidden md:block"/> Transformers
                    </p>
                    <Button name="Scroll Down" icon={<VscArrowDown />}/>
                </div>
                {/*Image Section*/}
                <div className="hidden md:block">
                    <Image src={heroImage} alt='hero image'/>
                    <div className="border border-grey px-2 py-0.5 relative text-center">
                        <div className="inline-block w-3 h-3 absolute left-2 top-2 bg-purple"></div>
                        <span className="px-2 text-grey">Hey!!! It&apos;s Me</span>
                    </div>
                </div>
            </div>            
        </div>
    );
}