import AnimatedSection from "@/components/ui/AnimatedSection";
import SkillCard from "@/components/ui/SkillCard";
import { skills, categoryLabels, SkillCategory } from "@/data/skills";

const categories: SkillCategory[] = ["frontend", "backend", "database", "tooling"];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-card/50">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <p className="text-accent text-xs font-medium tracking-widest uppercase mb-2">
            Skills
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-16">
            My Tech Stack
          </h2>
        </AnimatedSection>

        <div className="space-y-10">
          {categories.map((category) => {
            const categorySkills = skills.filter((s) => s.category === category);
            return (
              <div key={category}>
                <AnimatedSection>
                  <h3 className="text-sm font-medium text-muted uppercase tracking-widest mb-4">
                    {categoryLabels[category]}
                  </h3>
                </AnimatedSection>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                  {categorySkills.map((skill, index) => (
                    <AnimatedSection key={skill.name} delay={index * 0.05}>
                      <SkillCard skill={skill} />
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
