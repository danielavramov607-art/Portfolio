import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";

const stats = [
  { label: "Years Experience", value: "3+" },
  { label: "Projects Shipped", value: "20+" },
  { label: "Technologies", value: "12+" },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <p className="text-accent text-xs font-medium tracking-widest uppercase mb-2">
            About
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-16">
            Who I Am
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Bio */}
          <AnimatedSection delay={0.1}>
            <div className="space-y-5">
              <p className="text-muted leading-relaxed">
                I&apos;m a passionate full stack developer with a love for building
                products that make a difference. I enjoy working across the entire
                stack — crafting clean UIs with React and Next.js, designing
                RESTful APIs with Node.js, and architecting efficient database
                schemas with PostgreSQL and MongoDB.
              </p>
              <p className="text-muted leading-relaxed">
                I care deeply about code quality, performance, and developer
                experience. Whether it&apos;s a solo project or a team environment,
                I thrive on solving hard problems and shipping great software.
              </p>
              <p className="text-muted leading-relaxed">
                When I&apos;m not coding, you&apos;ll find me exploring new
                technologies, contributing to open source, or reading about
                software architecture.
              </p>

              {/* Quick stats */}
              <div className="flex flex-wrap gap-3 pt-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="px-4 py-2 rounded-lg border border-accent/20 bg-accent/5"
                  >
                    <span className="text-accent font-bold text-lg">{stat.value}</span>
                    <span className="text-muted text-sm ml-2">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Photo placeholder */}
          <AnimatedSection delay={0.2}>
            <div className="relative">
              <div className="w-full max-w-sm mx-auto rounded-2xl border border-white/8 bg-card overflow-hidden relative" style={{ aspectRatio: "2/3" }}>
                <Image
                  src="/IMG_805.jpg"
                  alt="Daniel Avramov"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Decorative corner accent */}
              <div className="absolute -bottom-3 -right-3 w-24 h-24 border-b-2 border-r-2 border-accent/30 rounded-br-2xl pointer-events-none" />
              <div className="absolute -top-3 -left-3 w-24 h-24 border-t-2 border-l-2 border-accent/30 rounded-tl-2xl pointer-events-none" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
