import { motion } from "framer-motion";
import { Shield, Cpu, Users, Layers, ArrowRight } from "lucide-react";
import { luxuryEase } from "../lib/constants";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: luxuryEase,
    },
  },
};

export default function Enterprise() {
  return (
    <section
      className="enterprise-section py-32 border-t border-black/5 bg-white"
      id="enterprise"
    >
      <motion.div
        className="max-w-6xl mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5 flex flex-col justify-between space-y-12">
            <div>
              <motion.div
                variants={itemVariants}
                className="text-sm font-mono tracking-widest uppercase mb-6 text-gray-400"
              >
                Institutional Scale
              </motion.div>

              <motion.h2
                variants={itemVariants}
                className="text-5xl font-serif leading-tight mb-6 tracking-tight"
              >
                Architectural workflows, unconstrained.
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="text-gray-500 leading-relaxed"
              >
                For large firms, studios, and enterprises requiring dedicated
                infrastructure, custom material libraries, and volume rendering
                pipelines.
              </motion.p>
            </div>

            <motion.div variants={itemVariants} className="pt-6">
              <div className="text-sm font-mono text-gray-400 mb-2">
                Pricing Structure
              </div>
              <div className="text-3xl font-serif mb-6">
                Bespoke / Custom Quote
              </div>

              <motion.a
                href="mailto:faizan@gmail.com?subject=Roomora%20Enterprise%20Inquiry"
                className="enterprise-cta"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.4, ease: luxuryEase }}
              >
                <ArrowRight
                  size={16}
                  className="mr-2 inline-block transform -rotate-45"
                />
                Initiate Consultation
              </motion.a>
            </motion.div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 pl-0 lg:pl-12 border-t lg:border-t-0 lg:border-l border-black/5 pt-12 lg:pt-0">
            <motion.div variants={itemVariants} className="capability-card">
              <Cpu className="text-black mb-4" size={22} />
              <h3 className="text-lg font-serif mb-2">Dedicated Compute</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Bypass standard processing pipelines with isolated high-priority
                node clusters for instantaneous 1024px architectural renders.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="capability-card">
              <Layers className="text-black mb-4" size={22} />
              <h3 className="text-lg font-serif mb-2">
                Custom Material Fine-Tuning
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Train the spatial layout engine to recognize and apply your
                firm's specific hardware, signature catalog assets, or
                proprietary finishing styles.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="capability-card">
              <Shield className="text-black mb-4" size={22} />
              <h3 className="text-lg font-serif mb-2">Isolated Data Custody</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Enterprise-grade data isolation protocols ensuring your
                unreleased blueprints, floor plans, and spatial data remain
                confidential and air-gapped.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="capability-card">
              <Users className="text-black mb-4" size={22} />
              <h3 className="text-lg font-serif mb-2">Organization Controls</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Centralized multi-seat billing, SAML single sign-on (SSO),
                granular team workspace permissions, and audit logs for global
                design teams.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
