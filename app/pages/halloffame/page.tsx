'use client'
import React from 'react';
import { GiPublicSpeaker, GiBookshelf } from "react-icons/gi";
import { MdMilitaryTech } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import ThreeScene from '@/components/ThreeScene';
import Scrollbar from '@/components/scrollbar';
import Footer from '@/components/footer';
import SkillCard from '@/components/SkillCard';
import AchievementCard from '@/components/AchievementCard';
import EducationCard from '@/components/EducationCard';
import SkillsSection from '@/components/SkillsSection';

const Page: React.FC = () => {
  const [selectedEdu, setSelectedEdu] = React.useState<number | null>(null);

  const softSkills = [
    { name: "Leadership", level: 95 },
    { name: "Communication", level: 90 },
    { name: "Problem Solving", level: 85 },
    { name: "Team Management", level: 88 }
  ];

  const education = [
    {
      degree: "Master's in Computer Science",
      year: "2020-2022",
      details: "Specialized in AI and Machine Learning"
    },
    {
      degree: "Bachelor's in Software Engineering",
      year: "2016-2020",
      details: "First Class Honours"
    }
  ];

  const achievements = [
    {
      title: "Industry Leader",
      description: "Recognized as top 30 under 30 in Technology",
      icon: "🏆"
    },
    {
      title: "Innovation Award",
      description: "Patent holder for breakthrough AI algorithm",
      icon: "💡"
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
          <SkillCard title="Soft Skills" skills={softSkills} />
        </div>
      </section>

      <section className="min-h-screen bg-gradient-to-b from-indigo-900 to-blue-900 flex flex-col items-center justify-center p-8" id="section4">
        <div className="mb-10 text-center flex items-center text-4xl font-bold text-white">
          <GiBookshelf className="mr-2" /> Education
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <EducationCard
              key={index}
              education={edu}
              isSelected={selectedEdu === index}
              onClick={() => setSelectedEdu(selectedEdu === index ? null : index)}
            />
          ))}
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

      <Footer />
    </>
  );
};

export default Page;