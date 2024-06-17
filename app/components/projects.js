import ProjectBox from "./ProjectBox";
import projects from "@/utils/projectsList";
import DotsDesign from "./dotsDesign";
import BoxDesign from "./BoxDesign";

export default function Projects() {

    return (
        <div className="py-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <DotsDesign row={3} col={5} left={0} top={1500}/>
            {projects.map((item, index) => (
                <ProjectBox key={index} name={item.name} technologies={item.technologies} image={item.imageLink} description={item.description}/>
            ))}
            <BoxDesign len={10} bre={100} right={0} top={800} animation='box-left-entry'/>
        </div>
    );
}