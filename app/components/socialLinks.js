import { AiFillInstagram, AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";


export default function SocialLinks() {
    return (
        <div className="fixed top-0 w-8 flex flex-col items-center gap-3 pull-down">
            <div className="w-[1px] h-24 border border-dotgrey"></div>
            <a href="https://github.com/roshith2001" target="_blank"><AiFillGithub /></a>
            <a href="https://www.linkedin.com/in/roshith-krishna-p/" target="_blank"><AiFillLinkedin /></a>
            <a href="https://www.instagram.com/_r.o.s.h.i.t.h_/" target="_blank"><AiFillInstagram /></a>
            <a href="https://x.com/Roshith_KrishnP" target="_blank"><AiFillTwitterCircle/></a>
        </div>
    );
}


