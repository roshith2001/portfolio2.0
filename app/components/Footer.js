import { AiFillInstagram, AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";

export default function Footer() {
    return (
        <div className="px-8 md:px-16 pb-1 border-t ">
            <div className="flex justify-between items-center py-6">
                <div>
                    <p className="font-bold">Roshith Krishna</p>
                </div>
                <div>
                    <div className="grid grid-cols-4 gap-2">
                        <a href="https://github.com/roshith2001" target="_blank"><AiFillGithub /></a>
                        <a href="https://www.linkedin.com/in/roshith-krishna-p/" target="_blank"><AiFillLinkedin /></a>
                        <a href="https://www.instagram.com/_r.o.s.h.i.t.h_/" target="_blank"><AiFillInstagram /></a>
                        <a href="https://x.com/Roshith_KrishnP" target="_blank"><AiFillTwitterCircle/></a>
                    </div>
                </div>
            </div>
            <div>
                <p className="text-[9px] md:text-[12px] text-center text-grey">&copy;Copyright 2-24. Made by Roshith Krishna P</p>
            </div>
        </div>
    );
}