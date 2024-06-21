import javaScript from '@/public/javascript.png';
import Image from 'next/image';

export default function SkillBox() {
    return (
        <div className='w-full'>
            <div className='md:w-1/2 p-1 border border-grey flex flex-col items-center'>
                <Image src={javaScript} alt="Skill"/>
                <p className='text-center text-[10px] md:text-xs py-1'>JavaScript</p>
            </div>
        </div>
    );
}
