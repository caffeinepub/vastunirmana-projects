import { Award, Building2, Calendar, Users } from "lucide-react";
import { motion } from "motion/react";

const clients = [
  "Indian Oil",
  "Haldirams",
  "Air India",
  "Coromandel",
  "Herman Miller",
  "Toyota",
  "Sheraton",
  "Japan Airlines",
  "Johnson",
  "Metro Cash & Carry",
  "Sealy",
  "Tempur",
  "Barcelos",
  "Depot 48",
  "AZB Partners",
];

const marqueeClients = [
  ...clients.map((c) => ({ name: c, key: `a-${c}` })),
  ...clients.map((c) => ({ name: c, key: `b-${c}` })),
];

const awards = [
  {
    title: "Excellence in Commercial Design",
    year: "2022",
    org: "Interior Design Council of India",
  },
  {
    title: "Best Corporate Interior",
    year: "2019",
    org: "Design Awards South Asia",
  },
  {
    title: "Outstanding Retail Space Design",
    year: "2018",
    org: "Retail Design Institute",
  },
  {
    title: "Hospitality Design of the Year",
    year: "2016",
    org: "Hospitality Excellence Awards",
  },
];

export default function About() {
  return (
    <main className="pt-28 pb-24 min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="h-72 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526078e2b5?w=1920&h=500&fit=crop&auto=format')`,
          }}
        >
          <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center"
            >
              <p className="text-gold text-xs tracking-widest mb-3">
                WHO WE ARE
              </p>
              <h1 className="font-display text-white text-4xl md:text-5xl font-medium">
                ABOUT US
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-[oklch(0.11_0_0)]">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-gold text-xs tracking-widest mb-4">OUR STORY</p>
            <h2 className="font-display text-foreground text-3xl font-medium mb-6 leading-snug">
              Two Decades of Transforming Spaces
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Founded in 2006 by Jasvir Singh, Vastunirmana Projects Pvt. Ltd.
              has grown into one of India's most respected interior design
              firms. We specialize in creating functional, aesthetically
              superior spaces for corporate, retail, hospitality, residential,
              institutional, and healthcare sectors.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Our philosophy is simple — every space should tell a story. We
              blend contemporary design sensibilities with timeless
              craftsmanship to create interiors that not only look stunning but
              also enhance productivity and wellbeing.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              From intimate boutiques to sprawling corporate campuses, from cozy
              cafes to luxury hotels, our portfolio spans a diverse range of
              projects across India — each one a testament to our commitment to
              excellence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { icon: Calendar, num: "2006", label: "Established" },
              { icon: Building2, num: "37+", label: "Projects" },
              { icon: Users, num: "15+", label: "Clients" },
              { icon: Award, num: "7", label: "Categories" },
            ].map((s) => (
              <div
                key={s.label}
                className="bg-[oklch(0.14_0_0)] border border-border p-6 flex flex-col items-center text-center gap-3"
              >
                <s.icon size={24} className="text-gold" />
                <span className="font-display text-gold text-3xl font-medium">
                  {s.num}
                </span>
                <span className="text-muted-foreground text-xs tracking-wider">
                  {s.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Director */}
      <section className="py-20 bg-[oklch(0.09_0_0)]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-gold text-xs tracking-widest mb-4">LEADERSHIP</p>
            <h2 className="font-display text-foreground text-3xl font-medium mb-8">
              Jasvir Singh
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Director & Principal Designer at Vastunirmana Projects Pvt. Ltd.,
              Jasvir Singh brings over two decades of visionary design
              leadership. His philosophy of harmonizing form with function has
              defined the firm's signature style — spaces that are
              simultaneously beautiful, purposeful, and enduring.
            </p>
            <p className="text-gold text-xs tracking-widest italic">
              &ldquo;Design is not just what it looks like and feels like.
              Design is how it works.&rdquo;
            </p>
          </motion.div>
        </div>
      </section>

      {/* Clients Marquee */}
      <section className="py-20 bg-[oklch(0.12_0_0)] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
          <p className="text-gold text-xs tracking-widest mb-3">
            WHO WE'VE WORKED WITH
          </p>
          <h2 className="font-display text-foreground text-3xl font-medium">
            OUR CLIENTS
          </h2>
        </div>
        <div className="relative">
          <div className="flex animate-marquee whitespace-nowrap">
            {marqueeClients.map((client) => (
              <div
                key={client.key}
                className="inline-flex items-center px-10 border-r border-border"
              >
                <span className="text-muted-foreground text-sm tracking-widest hover:text-gold transition-colors">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-20 bg-[oklch(0.09_0_0)]">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-gold text-xs tracking-widest mb-3">
              RECOGNITION
            </p>
            <h2 className="font-display text-foreground text-3xl font-medium">
              AWARDS & ACCOLADES
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {awards.map((award, i) => (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border border-border p-6 flex gap-4"
              >
                <div className="text-gold mt-1">
                  <Award size={20} />
                </div>
                <div>
                  <p className="text-gold text-xs tracking-widest mb-1">
                    {award.year}
                  </p>
                  <h3 className="text-foreground text-base font-medium mb-2">
                    {award.title}
                  </h3>
                  <p className="text-muted-foreground text-xs">{award.org}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
