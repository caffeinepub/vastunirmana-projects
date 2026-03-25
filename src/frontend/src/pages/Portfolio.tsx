import { X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import {
  CATEGORIES,
  type Category,
  PROJECTS,
  type Project,
} from "../data/projects";

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<Category>("ALL");
  const [lightbox, setLightbox] = useState<Project | null>(null);

  const filtered =
    activeCategory === "ALL"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <main className="pt-28 pb-24 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-gold text-xs tracking-widest mb-3">OUR WORK</p>
          <h1 className="font-display text-foreground text-3xl md:text-5xl font-medium">
            OUR PORTFOLIO
          </h1>
        </motion.div>

        {/* Category Filters */}
        <div
          className="flex flex-wrap justify-center gap-4 md:gap-8 mb-14"
          data-ocid="portfolio.tab"
        >
          {CATEGORIES.map((cat) => (
            <button
              type="button"
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs tracking-widest pb-1 transition-all duration-200 ${
                activeCategory === cat
                  ? "text-gold border-b border-gold"
                  : "text-muted-foreground hover:text-foreground border-b border-transparent"
              }`}
              data-ocid={`portfolio.${cat.toLowerCase()}.tab`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                className="group relative overflow-hidden cursor-pointer"
                onClick={() => setLightbox(project)}
                data-ocid={`portfolio.item.${i + 1}`}
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-gold text-xs tracking-widest mb-1">
                    {project.category}
                  </p>
                  <h3 className="text-white text-base font-medium">
                    {project.name}
                  </h3>
                  {project.location && (
                    <p className="text-white/60 text-xs mt-1">
                      {project.location}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div
            className="text-center py-20 text-muted-foreground"
            data-ocid="portfolio.empty_state"
          >
            No projects found in this category.
          </div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6"
            onClick={() => setLightbox(null)}
            data-ocid="portfolio.modal"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightbox.image.replace("w=600&h=400", "w=1200&h=800")}
                alt={lightbox.name}
                className="w-full object-cover max-h-[70vh]"
              />
              <div className="bg-[oklch(0.12_0_0)] px-6 py-4 flex items-center justify-between">
                <div>
                  <p className="text-gold text-xs tracking-widest">
                    {lightbox.category}
                  </p>
                  <h3 className="text-white text-xl font-display font-medium mt-1">
                    {lightbox.name}
                  </h3>
                  {lightbox.location && (
                    <p className="text-muted-foreground text-sm mt-1">
                      {lightbox.location}
                    </p>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => setLightbox(null)}
                  className="text-muted-foreground hover:text-gold transition-colors ml-4"
                  aria-label="Close lightbox"
                  data-ocid="portfolio.close_button"
                >
                  <X size={24} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
