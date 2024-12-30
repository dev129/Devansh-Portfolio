import React from 'react';

const skills = [
    { name: 'JavaScript', level: 'Advanced' },
    { name: 'React', level: 'Advanced' },
    { name: 'Next.js', level: 'Intermediate' },
    { name: 'Tailwind CSS', level: 'Intermediate' },
    // Add more skills as needed
];

const achievements = [
    { title: 'Completed 100 Days of Code', description: 'Successfully completed the 100 Days of Code challenge.' },
    { title: 'Built a Portfolio Website', description: 'Designed and developed a personal portfolio website using Next.js and Tailwind CSS.' },
    // Add more achievements as needed
];

const SkillsAndAchievements = () => {
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-4xl font-bold mb-6">Skills & Achievements</h1>
            
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Skills</h2>
                <ul className="list-disc list-inside">
                    {skills.map((skill, index) => (
                        <li key={index} className="mb-2">
                            <span className="font-medium">{skill.name}</span>: {skill.level}
                        </li>
                    ))}
                </ul>
            </section>
            
            <section>
                <h2 className="text-2xl font-semibold mb-4">Achievements</h2>
                <ul className="list-disc list-inside">
                    {achievements.map((achievement, index) => (
                        <li key={index} className="mb-2">
                            <span className="font-medium">{achievement.title}</span>: {achievement.description}
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default SkillsAndAchievements;