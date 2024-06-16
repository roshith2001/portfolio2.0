export default function SectionHeader({header}) {
    return (
        <div className="">
            <p className="text-3xl inline-block pr-2"><span className="text-purple text-4xl">#</span>{header}</p>
            <div className="inline-block w-3/5 h-[1px] bg-purple"></div>
        </div>
    );
}