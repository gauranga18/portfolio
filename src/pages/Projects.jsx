import { motion } from 'framer-motion';
import { useState } from 'react';

const projects = [
  {
    title: "Skill Sync",
    description: "A dynamic platform that connects skilled professionals with learning opportunities. Features real-time skill matching, interactive learning paths, and a collaborative community space for knowledge sharing.",
    image: "https://cdn.pixabay.com/photo/2024/06/14/12/15/developer-8829709_1280.jpg",
    tags: ["React", "Node.js", "MongoDB", "Express", "Socket.io", "TailwindCSS"],
    liveUrl: "https://skillsync-demo.vercel.app",
    githubUrl: "https://github.com/gauranga18/skillsync"
  },
  {
    title: "Portfolio",
    description: "A modern, responsive portfolio website built with React and Framer Motion. Features smooth animations, dynamic project showcases, and an interactive user interface with dark mode support.",
    image: "https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg",
    tags: ["React", "Framer Motion", "TailwindCSS", "Vite"],
    liveUrl: "https://saurav-portfolio-woad.vercel.app/",
    githubUrl: "https://github.com/gauranga18/portfolio"
  },
  {
    title: "DevVault",
    description: "A modern, responsive Developer collaboration website built with React and SpringBoot.",
    image: "https://i0.wp.com/mia-platform.eu/wp-content/uploads/Mia-Platform-Internal-Developer-Portal-2.png?fit=1920%2C991&ssl=1",
    tags: ["React", "SpringBoot", "JWT", "AES","PostgreSQL"],
    liveUrl: "https://saurav-portfolio-woad.vercel.app/",
    githubUrl: "https://github.com/gauranga18/DevVault"
  },
];

const ProjectCard = ({ project, index }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl bg-secondary/30 backdrop-blur-sm border border-white/10 hover:border-accent/50 transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image Container */}
      <motion.div 
        className="relative h-48 overflow-hidden"
        animate={{ scale: isHovered ? 1.05 : 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Loading Placeholder */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-secondary/50 animate-pulse">
            <div className="h-full w-full flex items-center justify-center">
              <svg className="w-8 h-8 text-accent animate-spin" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
            </div>
          </div>
        )}
        
        {/* Project Image */}
        <img
          src={project.image}
          alt={project.title}
          className={`w-full h-full object-cover transition-all duration-500 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
          onError={(e) => {
            e.target.src = '/projects/default-project.svg';
            setImageLoaded(true);
          }}
        />

        {/* Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"
          animate={{ opacity: isHovered ? 0.9 : 0.5 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* Project Info */}
      <motion.div 
        className="relative p-6"
        animate={{ y: isHovered ? -5 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-gray-300 mt-2 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map((tag) => (
            <motion.span
              key={tag}
              className="px-2 py-1 text-xs rounded-full bg-accent/20 text-accent border border-accent/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tag}
            </motion.span>
          ))}
        </div>

        {/* Links */}
        <motion.div 
          className="flex gap-4 mt-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
          transition={{ duration: 0.3 }}
        >
          {project.liveUrl && project.liveUrl !== "#" && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-accent transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
              </svg>
              Live Preview
            </a>
          )}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white hover:text-accent transition-colors duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <div className="min-h-screen py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="section-title">My Projects</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Here are some of my recent projects showcasing my skills in web development, data structures, and algorithms.
          Each project represents a unique challenge and learning experience.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
      >
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </motion.div>
    </div>
  );
};

export default Projects; 