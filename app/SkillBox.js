import javaScript from '@/public/javascript.png';
import Image from 'next/image';

export default function SkillBox() {
    return (
        <div className='w-full p-1 border border-grey flex flex-col items-center'>
            <Image src={javaScript} alt="Skill"/>
            <p className='text-center text-xs py-1'>JavaScript</p>
        </div>
    );
}
