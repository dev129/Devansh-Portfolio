"use client"
import React from "react";
import { motion } from "framer-motion";

const SkillCard = () => {
  const skillsData = [
    { name: "Leadership", emoji: "👑", level: 100 },
    { name: "Communication", emoji: "💬", level: 100 },
    { name: "Problem Solving", emoji: "🧩", level: 100 },
    { name: "Team Management", emoji: "🤝", level: 100 },
    { name: "Creativity", emoji: "🎨", level: 100 },
    { name: "Adaptability", emoji: "🔄", level: 100 }
  ];

  // Color variants for different skills
  const colorVariants = [
    "from-blue-400 to-purple-500",
    "from-blue-400 to-purple-500",
    "from-blue-400 to-purple-500",
    "from-blue-400 to-purple-500",
    "from-blue-400 to-purple-500",
    "from-blue-400 to-purple-500",
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative bg-gradient-to-br from-gray-900 to-black p-6 rounded-2xl shadow-2xl shadow-purple-500/20 w-full max-w-2xl border border-white/10 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.05 }}
            transition={{ delay: i * 0.2, duration: 1 }}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 200 + 100,
              height: Math.random() * 200 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: "blur(40px)"
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <motion.h3 
          initial={{ y: -10 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200"
        >
          My Superpowers
        </motion.h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 ? 20 : -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all"
            >
              <div className="flex items-center gap-3 mb-2">
                <motion.span 
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3, repeatType: "reverse" }}
                  className="text-2xl"
                >
                  {skill.emoji}
                </motion.span>
                <span className="text-lg font-medium text-white/90">{skill.name}</span>
                {/* <span className="ml-auto text-sm font-mono text-white/60">{skill.level}%</span> */}
              </div>
              
              <div className="relative h-2 w-full bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ 
                    delay: index * 0.1 + 0.5,
                    duration: 1,
                    type: "spring"
                  }}
                  className="absolute h-full rounded-full bg-gradient-to-r from-blue-400 to-purple-500"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-6 text-center text-xs text-white/40"
        >
          "Skills are the currency of the future"
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SkillCard;