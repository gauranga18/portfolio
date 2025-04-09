import { motion } from 'framer-motion';

const Avatar = () => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20
      }}
      className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-accent/50 hover:border-accent transition-colors duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <img
        src="/avatar.png"
        alt="Profile Avatar"
        className="w-full h-full object-cover"
        onError={(e) => {
          e.target.src = `https://ui-avatars.com/api/?name=S+G&background=6366F1&color=fff&bold=true`;
        }}
      />
      <div className="absolute inset-0 bg-accent/10 hover:bg-transparent transition-colors duration-300" />
    </motion.div>
  );
};

export default Avatar; 