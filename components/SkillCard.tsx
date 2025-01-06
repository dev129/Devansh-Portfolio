'use client'
import React from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
}

interface SkillCardProps {
  title: string;
  skills: Skill[];
}

const SkillCard: React.FC<SkillCardProps> = ({ title, skills }) => (
  <motion.div 
    whileHover={{ scale: 1.05 }}
    className="bg-white/10 backdrop-blur-lg rounded-xl p-6 m-4 w-64"
  >
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <div className="space-y-2">
      {skills.map((skill, index) => (
        <div key={index} className="relative h-4 bg-white/20 rounded-full">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${skill.level}%` }}
            transition={{ duration: 1, delay: index * 0.2 }}
            className="absolute h-full bg-white/60 rounded-full"
          />
          <span className="absolute -top-6 left-0 text-sm">{skill.name}</span>
        </div>
      ))}
    </div>
  </motion.div>
);

export default SkillCard;