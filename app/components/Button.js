'use client'

import { handleScroll } from "@/utils/handleScroll";
import Link from "next/link";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css"; //

const Button = ({name, icon, link, external, animation}) => {
  if(external){
    return (
      <Link href={link || '#'} onClick={(e) => link === '' && e.preventDefault() } target={name=='Resume'?'_blank':'_self'}>
        <RawButton name={name} icon={icon} link={link} external={external} animation={animation}/>
      </Link>
    );
  }
  return <RawButton name={name} icon={icon} link={link} external={external}/>;
};

const RawButton = ({name, icon, link, external, animation}) => {
  const buttonClassActive = "border border-purple p-2 flex items-center space-x-2 text-sm button"
  return(
    <>
      <button 
        onClick={!external ? (e) => handleScroll(e, link) : null} 
        className= {`border p-2 flex items-center ${animation} space-x-2 text-sm ${link!==''?'button border-purple':'bg-dotgrey cursor-not-allowed text-slate-600 border-slate-800'}`}
        disabled={link === ''}
        data-tooltip-id="disabled-tooltip"
        data-tooltip-content={link === "" ? "Can't access because this is a Live Project" : ""}
      >
        <span>{name}</span>
        <span>{icon}</span>
      
      </button>
      <Tooltip id="disabled-tooltip" place="top" effect="solid" />
    </>
  )
}

export default Button;