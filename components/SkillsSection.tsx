'use client'
import React from 'react';
import { GiProcessor } from "react-icons/gi";
import { MdComputer } from "react-icons/md";
import Marquee from "react-fast-marquee";
import SkillCard from './SkillCard';

interface Skill {
  name: string;
  level: number;
}

const SkillsSection: React.FC = () => {
  const techSkills: Skill[] = [
    { name: "Full Stack Development", level: 90 },
    { name: "Cloud Architecture", level: 85 },
    { name: "DevOps", level: 80 },
    { name: "AI/ML", level: 75 }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-black to-purple-900 flex flex-col items-center justify-center p-8" id="section2">
      <div className="mb-10 text-center flex items-center justify-center text-4xl font-bold text-white">
        <GiProcessor className="mr-2" /> Technical Skills <MdComputer className="ml-2" />
      </div>
      
      <div className="flex flex-wrap justify-center gap-8 mb-12">
        <SkillCard title="Technical Expertise" skills={techSkills} />
      </div>

      <Marquee gradient={false} speed={50} autoFill className="bg-white/5 py-8">
        {Array(5).fill(0).map((_, i) => (
          <img 
            key={i}
            src="https://picsum.photos/200/200"
            alt={`Certification ${i + 1}`}
            className="mx-4 rounded-lg h-32 object-cover"
          />
        ))}
      </Marquee>
    </section>
  );
};

export default SkillsSection;