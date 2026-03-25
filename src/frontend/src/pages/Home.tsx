import { ArrowRight, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { Link } from "../App";
import { PROJECTS } from "../data/projects";

const heroSlides = [
  {
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&h=1080&fit=crop&auto=format",
    title: "Tailored Luxury Interior Design",
    sub: "WHERE SOPHISTICATION MEETS COMFORT",
  },
  {
    image:
      "https://images.unsplash.com/photo-1497366216548-37526078e2b5?w=1920&h=1080&fit=crop&auto=format",
    title: "Corporate Spaces Reimagined",
    sub: "INNOVATION IN EVERY DETAIL",
  },
  {
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&h=1080&fit=crop&auto=format",
    title: "Hospitality Excellence",
    sub: "CRAFTING UNFORGETTABLE EXPERIENCES",
  },
  {
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1920&h=1080&fit=crop&auto=format",
    title: "Retail Environments That Inspire",
    sub: "DESIGN THAT DRIVES ENGAGEMENT",
  },
  {
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1920&h=1080&fit=crop&auto=format",
    title: "Residential Elegance Defined",
    sub: "YOUR HOME, OUR MASTERPIECE",
  },
];

const featuredProjects = PROJECTS.slice(0, 6);

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      {/* Hero Slideshow */}
      <section
        className="relative h-screen overflow-hidden"
        data-ocid="hero.section"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0"
          >
            <img
              src={heroSlides[currentSlide].image}
              alt={heroSlides[currentSlide].title}
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />
          </motion.div>
        </AnimatePresence>

        {/* Hero Text */}
        <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center pb-20 text-center px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col items-center gap-4"
            >
              <p className="text-gold text-xs tracking-widest-xl">
                {heroSlides[currentSlide].sub}
              </p>
              <h1 className="font-display text-white text-4xl md:text-6xl font-medium max-w-3xl leading-tight">
                {heroSlides[currentSlide].title}
              </h1>
            </motion.div>
          </AnimatePresence>

          {/* Slide indicators */}
          <div className="flex gap-2 mt-8">
            {heroSlides.map((slide, i) => (
              <button
                type="button"
                key={slide.title}
                onClick={() => setCurrentSlide(i)}
                className={`h-px transition-all duration-500 ${
                  i === currentSlide ? "w-10 bg-gold" : "w-4 bg-white/40"
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Scroll down */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
          <ChevronDown size={22} />
        </div>
      </section>

      {/* About Intro */}
      <section className="py-24 bg-[oklch(0.11_0_0)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-gold text-xs tracking-widest mb-4">EST. 2006</p>
            <h2 className="font-display text-foreground text-3xl md:text-4xl font-medium mb-6">
              Crafting Extraordinary Spaces
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl mx-auto">
              Vastunirmana Projects Pvt. Ltd. is a premier interior design firm
              based in New Delhi, specializing in transforming commercial and
              residential spaces. With over 18 years of excellence, we bring
              together artistry, functionality, and innovation to create
              environments that inspire and endure.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 text-gold text-xs tracking-widest hover:gap-4 transition-all duration-300"
              data-ocid="about.link"
            >
              DISCOVER OUR STORY <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-[oklch(0.09_0_0)]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-gold text-xs tracking-widest mb-3">OUR WORK</p>
            <h2 className="font-display text-foreground text-3xl md:text-4xl font-medium">
              Featured Projects
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredProjects.map((project, i) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group relative overflow-hidden cursor-pointer"
                data-ocid={`projects.item.${i + 1}`}
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
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
          </div>

          <div className="text-center mt-12">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-3 border border-gold text-gold text-xs tracking-widest px-8 py-4 hover:bg-gold hover:text-[oklch(0.09_0_0)] transition-all duration-300"
              data-ocid="portfolio.link"
            >
              VIEW ALL PROJECTS <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-[oklch(0.12_0_0)] border-y border-border">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: "18+", label: "Years of Excellence" },
              { num: "37+", label: "Projects Delivered" },
              { num: "15+", label: "Corporate Clients" },
              { num: "7", label: "Design Categories" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col gap-2"
              >
                <span className="font-display text-gold text-4xl font-medium">
                  {stat.num}
                </span>
                <span className="text-muted-foreground text-xs tracking-wider">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-[oklch(0.09_0_0)] text-center">
        <div className="max-w-2xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-gold text-xs tracking-widest mb-4">
              GET IN TOUCH
            </p>
            <h2 className="font-display text-foreground text-3xl md:text-4xl font-medium mb-6">
              Let's Create Something Extraordinary
            </h2>
            <p className="text-muted-foreground text-sm mb-10">
              Ready to transform your space? Our team is here to bring your
              vision to life.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-gold text-[oklch(0.09_0_0)] text-xs tracking-widest px-10 py-4 hover:bg-[oklch(0.65_0.10_83)] transition-colors duration-300"
              data-ocid="contact.primary_button"
            >
              START YOUR PROJECT
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
