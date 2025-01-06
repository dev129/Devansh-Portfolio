'use client'
import React from 'react';
import { motion } from 'framer-motion';

interface AchievementCardProps {
  title: string;
  description: string;
  icon: string;
}

const AchievementCard: React.FC<AchievementCardProps> = ({ title, description, icon }) => (
  <motion.div
    whileHover={{ y: -10 }}
    className="bg-white/5 backdrop-blur-lg rounded-xl p-6 m-4 w-80"
  >
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-sm opacity-80">{description}</p>
  </motion.div>
);

export default AchievementCard;