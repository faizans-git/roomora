import { motion } from "framer-motion";

const luxuryEase = [0.16, 1, 0.3, 1] as const;

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white py-12 mt-32">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <span className="font-serif text-lg tracking-tight">ROOMORA</span>
          <p className="text-xs font-mono text-gray-400">
            © {new Date().getFullYear()} ROOMORA. ALL RIGHTS RESERVED.
          </p>
        </div>

        <div className="flex gap-8 text-xs font-mono text-gray-400">
          <motion.a
            href="#about"
            className="hover:text-black transition-colors"
            whileHover={{ y: -1 }}
            transition={{ duration: 0.2, ease: luxuryEase }}
          >
            ABOUT
          </motion.a>
          <motion.a
            href="#projects"
            className="hover:text-black transition-colors"
            whileHover={{ y: -1 }}
            transition={{ duration: 0.2, ease: luxuryEase }}
          >
            PROJECTS
          </motion.a>
          <motion.a
            href="#enterprise"
            className="hover:text-black transition-colors"
            whileHover={{ y: -1 }}
            transition={{ duration: 0.2, ease: luxuryEase }}
          >
            ENTERPRISE
          </motion.a>
          <motion.a
            href="mailto:faizan@gmail.com"
            className="hover:text-black transition-colors"
            whileHover={{ y: -1 }}
            transition={{ duration: 0.2, ease: luxuryEase }}
          >
            CONTACT
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
