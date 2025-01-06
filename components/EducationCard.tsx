'use client'
import React from 'react';
import { motion } from 'framer-motion';

interface Education {
  degree: string;
  year: string;
  details: string;
}

interface EducationCardProps {
  education: Education;
  isSelected: boolean;
  onClick: () => void;
}

const EducationCard: React.FC<EducationCardProps> = ({ education, isSelected, onClick }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    onClick={onClick}
    className="bg-white/10 backdrop-blur-lg rounded-xl p-6 cursor-pointer"
  >
    <h3 className="text-xl font-bold text-white mb-2">{education.degree}</h3>
    <p className="text-white/80">{education.year}</p>
    {isSelected && (
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-4 text-white/70"
      >
        {education.details}
      </motion.p>
    )}
  </motion.div>
);

export default EducationCard;