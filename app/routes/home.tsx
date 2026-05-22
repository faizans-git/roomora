import type { Route } from "./+types/home";
import Navbar from "../../components/Navbar";
import { ArrowRight, ArrowUpRight, Clock, Layers } from "lucide-react";
import Button from "../../components/ui/Button";
import Upload from "../../components/Upload";
import { useNavigate } from "react-router";
import { useEffect, useRef, useState } from "react";
import { createProject, getProjects } from "../../lib/puter.action";
import { motion } from "framer-motion";
import { luxuryEase } from "../../lib/constants";
import About from "../../components/About";
import Enterprise from "../../components/Enterprise";
import Footer from "../../components/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: luxuryEase,
    },
  },
};

export default function Home() {
  const navigate = useNavigate();
  const [projects, setProjects] = useState<DesignItem[]>([]);
  const isCreatingProjectRef = useRef(false);

  const handleUploadComplete = async (base64Image: string) => {
    try {
      if (isCreatingProjectRef.current) return false;
      isCreatingProjectRef.current = true;
      const newId = Date.now().toString();
      const name = `Residence ${newId}`;

      const newItem = {
        id: newId,
        name,
        sourceImage: base64Image,
        renderedImage: undefined,
        timestamp: Date.now(),
      };

      const saved = await createProject({
        item: newItem,
        visibility: "private",
      });

      if (!saved) {
        console.error("Failed to create project");
        return false;
      }

      setProjects((prev) => [saved, ...prev]);

      navigate(`/visualizer/${newId}`, {
        state: {
          initialImage: saved.sourceImage,
          initialRendered: saved.renderedImage || null,
          name,
        },
      });

      return true;
    } finally {
      isCreatingProjectRef.current = false;
    }
  };

  useEffect(() => {
    const fetchProjects = async () => {
      const items = await getProjects();
      setProjects(items);
    };

    fetchProjects();
  }, []);

  return (
    <div className="home">
      <Navbar />

      <motion.section
        className="hero"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={itemVariants} className="announce">
          <div className="dot">
            <div className="pulse"></div>
          </div>
          <p>Introducing Roomora 2.0</p>
        </motion.div>

        <div style={{ overflow: "hidden" }}>
          <motion.h1 variants={itemVariants} style={{ originY: 1 }}>
            Build beautiful spaces at the speed of thought with Roomify
          </motion.h1>
        </div>

        <motion.p variants={itemVariants} className="subtitle">
          Roomora is an AI-first design environment that helps you visualize,
          render, and ship architectural projects faster than ever.
        </motion.p>

        <motion.div variants={itemVariants} className="actions">
          <motion.a
            href="#upload"
            className="cta"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.4, ease: luxuryEase }}
          >
            Start Building <ArrowRight className="icon" />
          </motion.a>

          <motion.div
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.4, ease: luxuryEase }}
          >
            <Button variant="outline" size="lg" className="demo">
              Watch Demo
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          id="upload"
          className="upload-shell"
          variants={{
            hidden: { opacity: 0, y: 40 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: 1.6, ease: luxuryEase, delay: 0.4 },
            },
          }}
        >
          <motion.div
            className="grid-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            transition={{ duration: 2, ease: "easeOut", delay: 0.6 }}
          />

          <div className="upload-card">
            <div className="upload-head">
              <div className="upload-icon">
                <Layers className="icon" />
              </div>

              <h3>Upload your floor plan</h3>
              <p>Supports JPG, PNG, formats up to 10MB</p>
            </div>

            <Upload onComplete={handleUploadComplete} />
          </div>
        </motion.div>
      </motion.section>

      <section className="projects" id="projects">
        <div className="section-inner">
          <div className="section-head">
            <div className="copy">
              <h2>Projects</h2>
              <p>
                Your latest work and shared community projects, all in one
                place.
              </p>
            </div>
          </div>

          <div className="projects-grid">
            {projects.map(
              ({ id, name, renderedImage, sourceImage, timestamp }) => (
                <motion.div
                  key={id}
                  className="project-card group"
                  onClick={() => navigate(`/visualizer/${id}`)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.8, ease: luxuryEase }}
                  whileHover={{ y: -6 }}
                >
                  <div className="preview">
                    <img src={renderedImage || sourceImage} alt="Project" />

                    <div className="badge">
                      <span>Community</span>
                    </div>
                  </div>

                  <div className="card-body">
                    <div>
                      <h3>{name}</h3>

                      <div className="meta">
                        <Clock size={12} />
                        <span>{new Date(timestamp).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <motion.div
                      className="arrow"
                      variants={{
                        hover: { x: 2, y: -2 },
                      }}
                    >
                      <ArrowUpRight size={18} />
                    </motion.div>
                  </div>
                </motion.div>
              ),
            )}
          </div>
        </div>
      </section>

      <About />
      <Enterprise />
      <Footer />
    </div>
  );
}
