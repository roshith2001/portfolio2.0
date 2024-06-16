import SectionHeader from "./SectionHeader";

export default function Section({header, component}) {
    return (
        <div className="w-5/6 mx-auto">
           <SectionHeader header={header}/>
           {component} 
        </div>
    );
}