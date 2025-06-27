import { motion } from 'framer-motion';
import { useState } from 'react';

const skills = [
  {
    category: "Frontend",
    technologies: [
      { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "TailwindCSS", icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" }
    ]
  },
  {
    category: "Programming Languages",
    technologies: [
      { name: "C++", icon: "https://img.icons8.com/?size=100&id=40669&format=png&color=000000" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
       { name: "Java", icon: "https://img.icons8.com/?size=100&id=13679&format=png&color=000000" }

    ]
  },
  {
    category: "Backend",
    technologies: [
      { name: "SpringBoot", icon: "https://img.icons8.com/?size=100&id=90519&format=png&color=000000" }
    ]
  },
  {
    category: "Database",
    technologies: [
      { name: "MongoDb", icon: "https://img.icons8.com/?size=100&id=74402&format=png&color=000000" },
      { name: "MySQL", icon: "https://img.icons8.com/?size=100&id=rgPSE6nAB766&format=png&color=000000" },
    ]
  },
  {
    category: "Tools & Platforms",
    technologies: [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    ]
  },
  {
    category: "Design",
    technologies: [
      { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" }
    ]
  }
];  

const TechIcon = ({ tech, delay }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.3,
        delay: delay,
        ease: "easeOut"
      }}
      className="flex flex-col items-center gap-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="relative w-16 h-16 rounded-xl bg-secondary/30 p-3 backdrop-blur-sm border border-white/10"
        animate={{
          scale: isHovered ? 1.1 : 1,
          borderColor: isHovered ? 'rgba(99, 102, 241, 0.5)' : 'rgba(255, 255, 255, 0.1)'
        }}
        transition={{ duration: 0.2 }}
      >
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin"/>
          </div>
        )}
        <img
          src={tech.icon}
          alt={tech.name}
          className={`w-full h-full object-contain transition-opacity duration-300 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
          onError={(e) => {
            e.target.src = '/skills/default-skill.svg';
            setImageLoaded(true);
          }}
        />
        <motion.div
          className="absolute inset-0 rounded-xl bg-accent/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>
      <motion.span
        className="text-sm text-gray-300"
        animate={{
          color: isHovered ? '#6366F1' : '#D1D5DB'
        }}
        transition={{ duration: 0.2 }}
      >
        {tech.name}
      </motion.span>
    </motion.div>
  );
};

const SkillCard = ({ skill, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-secondary/30 backdrop-blur-sm rounded-xl p-6 border border-white/10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{
        borderColor: 'rgba(99, 102, 241, 0.5)',
        y: -5
      }}
    >
      <motion.h3
        className="text-xl font-bold text-white mb-6"
        animate={{
          color: isHovered ? '#6366F1' : '#FFFFFF'
        }}
        transition={{ duration: 0.2 }}
      >
        {skill.category}
      </motion.h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
        {skill.technologies.map((tech, techIndex) => (
          <TechIcon
            key={tech.name}
            tech={tech}
            delay={index * 0.1 + techIndex * 0.05}
          />
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <div className="min-h-screen py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="section-title">My Skills</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Here are the technologies and tools I work with. I'm constantly learning and adding new skills to my repertoire.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <SkillCard key={skill.category} skill={skill} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Skills; 