'use client'
import React from 'react';
import { GiLaurelsTrophy } from "react-icons/gi"; 
import { AiOutlineHome } from "react-icons/ai"; 
import { GrPersonalComputer } from "react-icons/gr";
import { FaHandshake } from "react-icons/fa";

const Scrollbar: React.FC = () => {
  const scrollToView = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center transition-all duration-[450ms] ease-in-out w-16 sticky top-1/3">
        <article className=" border-solid border-2 dark:border-white border-black w-full ease-in-out duration-500 left-0 rounded-full inline-block shadow-lg shadow-black/15 dark:bg-black ">
          <label
            htmlFor="dashboard"
            className="has-[:checked]:shadow-lg relative w-full h-16 p-4 ease-in-out duration-300 border-solid border-black/10 has-[:checked]:border group flex flex-row gap-3 items-center justify-center text-black rounded-xl"
            onClick={() => window.location.href = '/'}
          >
            <input className="hidden peer/expand" type="radio" name="path" id="dashboard" />
            <AiOutlineHome size={200} className="peer-hover/expand:scale-125 peer-hover/expand:text-blue-400 peer-hover/expand:fill-blue-400  peer-checked/expand:fill-blue-400 text-2xl peer-checked/expand:scale-125 ease-in-out duration-300 dark:text-white " />
          </label>
          <label
            htmlFor="profile"
            className="has-[:checked]:shadow-lg relative w-full h-16 p-4 ease-in-out duration-300 border-solid border-black/10 has-[:checked]:border group flex flex-row gap-3 items-center justify-center text-black rounded-xl"
            onClick={() => scrollToView('section2')}
          >
            <input className="hidden peer/expand" type="radio" name="path" id="profile" />
            <GrPersonalComputer
              className="peer-hover/expand:scale-125 peer-hover/expand:text-blue-400 peer-hover/expand:fill-blue-400  peer-checked/expand:fill-blue-400 text-2xl peer-checked/expand:scale-125 ease-in-out duration-300 dark:text-white"/>
          </label>
          <label
            htmlFor="messages"
            className="has-[:checked]:shadow-lg relative w-full h-16 p-4 ease-in-out duration-300 border-solid border-black/10 has-[:checked]:border group flex flex-row gap-3 items-center justify-center text-black rounded-xl"
            onClick={() => scrollToView('section3')}
          >
            <input className="hidden peer/expand" type="radio" name="path" id="messages" />
            <FaHandshake
              className="peer-hover/expand:scale-125 peer-hover/expand:text-blue-400 peer-hover/expand:fill-blue-400  peer-checked/expand:fill-blue-400 text-2xl peer-checked/expand:scale-125 ease-in-out duration-300 dark:text-white"
             
            />
            
          </label>
          
          <label
            htmlFor="settings"
            className="has-[:checked]:shadow-lg relative w-full h-16 p-4 ease-in-out duration-300 border-solid border-black/10 has-[:checked]:border group flex flex-row gap-3 items-center justify-center text-black rounded-xl"
            onClick={() => scrollToView('section5')}
          >
            <input className="hidden peer/expand" type="radio" name="path" id="settings" />
            <GiLaurelsTrophy 
              className="peer-hover/expand:scale-125 peer-hover/expand:text-blue-400 peer-hover/expand:fill-blue-400   text-2xl peer-checked/expand:scale-125 ease-in-out duration-300 dark:text-white"
              />
          </label>
        </article>
      </div>
    </>
  );
};

export default Scrollbar;