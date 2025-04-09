import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box } from '@react-three/drei';

const services = [
  {
    title: "Web Development",
    description: "Custom web applications built with modern technologies like React, Node.js, and MongoDB.",
    icon: "💻",
  },
  {
    title: "UI/UX Design",
    description: "Beautiful and intuitive user interfaces designed with a focus on user experience.",
    icon: "🎨",
  },
  {
    title: "Responsive Design",
    description: "Websites that look and work perfectly on all devices and screen sizes.",
    icon: "📱",
  },
  {
    title: "3D Web Development",
    description: "Interactive 3D experiences and animations using Three.js and React Three Fiber.",
    icon: "🎮",
  },
];

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="project-card group"
    >
      <div className="h-32 mb-4 flex items-center justify-center">
        <Canvas>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Box args={[1, 1, 1]}>
            <meshStandardMaterial color="#3b82f6" />
          </Box>
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>

      <div className="text-4xl mb-4">{service.icon}</div>
      
      <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">
        {service.title}
      </h3>
      
      <p className="text-gray-300">{service.description}</p>
    </motion.div>
  );
};

const Services = () => {
  return (
    <div className="min-h-screen py-20">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="section-title text-center"
      >
        My Services
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={service.title} service={service} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Services; 