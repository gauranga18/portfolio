import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';
import Avatar from './Avatar';

const NavItems = ({ items, className, onItemClick }) => {
  const [hovered, setHovered] = useState(null);

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={`flex items-center justify-center space-x-4 ${className}`}
    >
      {items.map((item, idx) => (
        <Link
          onMouseEnter={() => setHovered(idx)}
          onClick={onItemClick}
          className="relative px-4 py-2 text-white hover:text-white transition-colors"
          key={`link-${idx}`}
          to={item.link}
        >
          {hovered === idx && (
            <motion.div
              layoutId="hovered"
              className="absolute inset-0 h-full w-full rounded-full bg-white/10 backdrop-blur-md"
            />
          )}
          <span className="relative z-20">{item.name}</span>
        </Link>
      ))}
    </motion.div>
  );
};

const MobileNav = ({ isOpen, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
      exit={{ opacity: 0, y: -20 }}
      className="lg:hidden"
    >
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 backdrop-blur-3xl z-40"
          onClick={onClose}
        />
      )}
      <motion.div
        className={`fixed top-24 left-4 right-4 z-50 rounded-[24px] bg-white/10 backdrop-blur-3xl border border-white/30 shadow-2xl ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <motion.div className="absolute inset-0 bg-gradient-to-b from-accent/20 to-transparent opacity-50 rounded-[24px]" />
        <nav className="flex flex-col space-y-2 p-4 relative z-10">
          <Link
            to="/"
            className="text-white hover:text-white transition-colors px-4 py-3 rounded-xl hover:bg-white/20 backdrop-blur-3xl bg-white/5"
            onClick={onClose}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white hover:text-white transition-colors px-4 py-3 rounded-xl hover:bg-white/20 backdrop-blur-3xl bg-white/5"
            onClick={onClose}
          >
            About
          </Link>
          <Link
            to="/skills"
            className="text-white hover:text-white transition-colors px-4 py-3 rounded-xl hover:bg-white/20 backdrop-blur-3xl bg-white/5"
            onClick={onClose}
          >
            Skills
          </Link>
          <Link
            to="/projects"
            className="text-white hover:text-white transition-colors px-4 py-3 rounded-xl hover:bg-white/20 backdrop-blur-3xl bg-white/5"
            onClick={onClose}
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="text-white hover:text-white transition-colors px-4 py-3 rounded-xl hover:bg-white/20 backdrop-blur-3xl bg-white/5"
            onClick={onClose}
          >
            Contact
          </Link>
        </nav>
      </motion.div>
    </motion.div>
  );
};

const Navbar = () => {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Skills", link: "/skills" },
    { name: "Projects", link: "/projects" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <motion.nav
      ref={ref}
      className="fixed inset-x-0 top-0 z-[100] h-20 px-4 pt-2"
    >
      <motion.div
        animate={{
          backdropFilter: visible ? "blur(25px)" : "blur(20px)",
          boxShadow: visible
            ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
            : "0 0 15px rgba(0, 0, 0, 0.1)",
          width: visible ? "90%" : "95%",
          y: visible ? 15 : 5,
          borderRadius: visible ? "2rem" : "1.75rem",
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 50,
        }}
        className="mx-auto h-16 max-w-7xl relative bg-white/10 backdrop-blur-3xl border border-white/20 rounded-[28px]"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-accent/10 rounded-[28px] opacity-50" />
        <div className="flex items-center justify-between h-full px-6 relative z-10">
          {/* Logo */}
          <Link
            to="/"
            className="relative z-20 flex items-center space-x-2 text-white hover:text-white transition-colors"
          >
            <span className="text-xl font-bold">Portfolio</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <NavItems items={navItems} className="text-sm font-medium" />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative z-20 w-10 h-10 flex items-center justify-center text-white hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <MobileNav isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </motion.div>
    </motion.nav>
  );
};

export default Navbar; 