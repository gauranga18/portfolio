import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';

const About = () => {
  return (
    <div className="min-h-screen py-20">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="section-title text-center"
      >
        About Me
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* 3D Avatar */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="h-[400px]"
        >
          <Canvas>
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[1, 100, 200]} scale={2}>
              <MeshDistortMaterial
                color="#3b82f6"
                attach="material"
                distort={0.5}
                speed={2}
              />
            </Sphere>
            <OrbitControls enableZoom={false} />
          </Canvas>
        </motion.div>

        {/* About Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold text-accent">Who Am I?</h2>
          <p className="text-lg leading-relaxed">
            I'm Saurav, a passionate Web Developer and UI/UX Designer from Assam, India. 
            Currently pursuing my BCA degree (2023–2026), I combine technical expertise 
            with creative design to build beautiful and functional digital experiences.
          </p>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">My Journey</h3>
            <p className="text-lg leading-relaxed">
              From writing my first line of code to creating complex web applications, 
              my journey has been driven by a passion for technology and design. 
              I believe in creating solutions that not only look great but also 
              solve real-world problems.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">What I Do</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                Web Development (React, Node.js, Express)
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                UI/UX Design (Figma, Adobe XD)
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                Responsive Web Design
              </li>
              
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About; 