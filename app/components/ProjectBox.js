import Image from "next/image";
export default function ProjectBox({}) {
    return (
        <div className="w-1/3 border border-grey">
            <div className="relative w-full h-full">
                <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqfJ6TaQZ4SozXizNgd_l7hQ3Md_fbvym87g&s' alt='Project Image' layout="fill" style={{objectFit:'cover'}}/>
            </div>
        </div>
    );
}