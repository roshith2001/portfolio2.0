import SkillBox from "../SkillBox";

export default function Skills() {
    return (
        <div className='md:flex items-center py-4 md:py-8'>
            <div className="pb-7">
                <p className="text-xl font-bold">Skills:</p>
            </div>
            <div className="px-4 grid grid-cols-3 md:grid-cols-4 gap-3">
                <SkillBox />
                <SkillBox />
                <SkillBox />
                <SkillBox />
            </div>
        </div>
    );
}