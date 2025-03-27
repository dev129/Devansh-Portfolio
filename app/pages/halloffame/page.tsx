'use client'
import React from 'react';
import { GiPublicSpeaker } from "react-icons/gi";
import { MdMilitaryTech } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import ThreeScene from '@/components/ThreeScene';
import Scrollbar from '@/components/scrollbar';
import SkillCard from '@/components/SkillCard';
import AchievementCard from '@/components/AchievementCard';
import SkillsSection from '@/components/SkillsSection';

const Page: React.FC = () => {
  const [selectedEdu, setSelectedEdu] = React.useState<number | null>(null);

  

  const education = [
    {
      degree: "Bachelors's in Artificial Intelligence",
      year: "2021-2025",
      details: "Specialized in AI and Dat Science"
    },
    {
      degree: "Bachelor's in Software Engineering",
      year: "2016-2020",
      details: "First Class Honours"
    }
  ];

  const achievements = [
    {
      title: "Software Club Head",
      description: "Organised 3 hackathons as the head of the club",
      icon: "🏆"
    },
    {
      title: "GSSOC-ext 2024 ",
      description: "Held 48th rank in girlscript summer of code extended 2024",
      icon: "🚀"
    },
    {
      title: "Community Impact",
      description: "Mentored 50+ aspiring developers",
      icon: "🌟"
    }
  ];

  return (
    <>
      <section className="min-h-screen bg-white dark:bg-black grid place-items-center relative overflow-hidden text-clip" id="section1">
        <div className='absolute flex items-center justify-center flex-col top-1/2 transform -translate-y-1/3 text-center'>
          <div className="absolute z-0 text-black dark:text-white text-center pb-52 xl:text-9xl lg:text-7xl md:text-5xl sm:text-xl text-5xl font-extrabold overflow-hidden text-clip">
            <span>Skills </span>
            <div className="block h-64 m-10"></div>
            <span>Achievements</span>
          </div>
          <div className="relative z-10">
            <ThreeScene />
          </div>
        </div>
        <div className="absolute right-20 top-1/3 transform -translate-y-1/2 w-2 h-32 hidden md:block">
          <Scrollbar />
        </div>
      </section>

      <SkillsSection />

      <section className="min-h-screen bg-gradient-to-b from-purple-900 to-indigo-900 flex flex-col items-center justify-center p-8" id="section3">
        <div className="mb-10 text-center flex items-center justify-center text-4xl font-bold text-white">
          <GiPublicSpeaker className="mr-2" /> Non-Technical Skills <FaPeopleGroup className="ml-2" />
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <SkillCard  />
        </div>
      </section>

      

      <section className="min-h-screen bg-gradient-to-b from-blue-900 to-cyan-900 flex flex-col items-center justify-center p-8" id="section5">
        <div className="mb-10 text-center flex items-center text-4xl font-bold text-white">
          <MdMilitaryTech className="mr-2" /> Achievements
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={index}
              {...achievement}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Page;