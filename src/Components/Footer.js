import React,{useState , useEffect} from "react";
import { IconContext } from "react-icons";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function Footer() {
  let [date,setDate] = useState(new Date());
    
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });
  return (
    <div className="flex items-center justify-between px-2 w-full bg-black border-0 border-t-[1px] border-b-[1px] border-[#4b4747] fixed bottom-0 h-12">
      <IconContext.Provider value={{ className: "social-icons" }}>
        <div className="flex gap-2">
          <p className="text-slate-400 sm:text-sm text-xs font-sans">Find me in :</p>
          <div className="sm:w-[40px] w-[30px] border-r-[1px] border-l-[1px] border-[#4b4747]">
            <a href="https://github.com/anuj-1712" target="_blank" rel="noreferrer">
              <BsGithub />
            </a>
          </div>
          <div className="sm:w-[40px] w-[30px] border-r-[1px] border-[#4b4747]">
            <a href="https://www.linkedin.com/in/anuj-choudhary-a5403223b/" target="_blank" rel="noreferrer">
              <BsLinkedin />
            </a>
          </div>
        </div>
      </IconContext.Provider>
      <div className="flex gap-3">
        <p className="text-slate-400 sm:text-sm text-xs font-sans">{date.toLocaleTimeString()}</p>
        <p className="text-slate-400 sm:text-sm text-xs font-sans">{date.toLocaleDateString()}</p>
      </div>
    </div>
  );
}
