'use client'
import React from 'react';
import { SiNextdotjs, SiTailwindcss, SiHtml5, SiCss3, SiJavascript, SiReact, SiDocker, SiGit, SiGithub, SiPostman } from 'react-icons/si';
import Marquee from "react-fast-marquee";
import { IconType } from 'react-icons';

interface Skill {
  name: string;
  level: number;
  icon: IconType;
  color: string;
}

const SkillsSection: React.FC = () => {
  const techSkills: Skill[] = [
    { name: "Next.js", level: 90, icon: SiNextdotjs, color: "text-white" },
    { name: "Tailwind CSS", level: 85, icon: SiTailwindcss, color: "text-cyan-400" },
    { name: "HTML5", level: 95, icon: SiHtml5, color: "text-orange-500" },
    { name: "CSS3", level: 90, icon: SiCss3, color: "text-blue-500" },
    { name: "JavaScript", level: 88, icon: SiJavascript, color: "text-yellow-400" },
    { name: "React", level: 92, icon: SiReact, color: "text-cyan-400" },
    { name: "Docker", level: 80, icon: SiDocker, color: "text-blue-400" },
    { name: "Git", level: 85, icon: SiGit, color: "text-red-500" },
    { name: "GitHub", level: 88, icon: SiGithub, color: "text-gray-200" },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-black to-purple-900 flex flex-col items-center justify-center p-8" id="section2">
      <div className="max-w-6xl w-full">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Technical Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techSkills.map((skill, index) => (
            <div 
              key={index}
              className="bg-white/10 p-6 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <skill.icon className={`text-3xl ${skill.color}`} />
                <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-2.5 rounded-full"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Marquee gradient={false} speed={50} className="bg-white/5 py-8 rounded-xl" autoFill>
            {techSkills.map((skill, index) => (
              <div key={index} className="mx-8">
                <skill.icon className={`text-4xl ${skill.color}`} />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;