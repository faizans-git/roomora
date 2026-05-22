import { motion } from "framer-motion";
import { Ruler, Box, Sun } from "lucide-react";

const luxuryEase = [0.16, 1, 0.3, 1] as const;

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.4,
      ease: luxuryEase,
    },
  },
};

export default function About() {
  return (
    <section
      className="about-section relative overflow-hidden py-32"
      id="about"
    >
      {/* Subtle blueprint grid background to reinforce the craftsmanship theme */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <motion.div
        className="max-w-6xl mx-auto px-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Editorial Statement */}
          <div className="editorial-copy max-w-xl">
            <motion.div
              variants={itemVariants}
              className="text-sm font-mono tracking-widest uppercase mb-6 text-gray-500"
            >
              The Engine
            </motion.div>
            <motion.h2
              variants={itemVariants}
              className="text-5xl font-serif leading-tight mb-8"
            >
              From raw blueprint to physical reality.
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 leading-relaxed mb-6"
            >
              Roomora isn't about generating approximations. It is a computation
              engine built to honor physical reality. We treat every 2D plan as
              a strict architectural framework—extruding walls, calculating
              spatial logic, and mapping realistic materials without
              compromising your original geometry.
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 leading-relaxed"
            >
              By stripping away the noise of annotations and dimensions, we
              reveal the structure exactly as it was designed to be built.
            </motion.p>
          </div>

          {/* Right Column: Technical Pillars (The 3 Rules from your prompt) */}
          <div className="technical-pillars space-y-10 mt-12 lg:mt-0">
            <motion.div variants={itemVariants} className="pillar flex gap-6">
              <div className="icon-wrapper mt-1">
                <Ruler className="text-black" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-serif mb-2">
                  1:1 Geometric Fidelity
                </h3>
                <p className="text-gray-600">
                  Walls, doors, and windows follow the exact lines of your
                  input. No shifting, resizing, or hallucinated spaces. Complete
                  architectural precision.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="pillar flex gap-6">
              <div className="icon-wrapper mt-1">
                <Box className="text-black" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-serif mb-2">
                  Intelligent Spatial Mapping
                </h3>
                <p className="text-gray-600">
                  2D icons are interpreted with structural logic. Door swing
                  arcs become open frames; simple icons translate to curated,
                  modern furnishings mapped to exact coordinates.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="pillar flex gap-6">
              <div className="icon-wrapper mt-1">
                <Sun className="text-black" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-serif mb-2">
                  Photorealistic Execution
                </h3>
                <p className="text-gray-600">
                  Rendered in strict orthographic top-down views. We apply
                  neutral daylight lighting and highly accurate material
                  textures to wood floors, tiles, and glass.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
