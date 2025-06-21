const experiences = [
  {
    title: 'Founding Engineer',
    company: 'ChatterBox',
    time: '2025 – Present',
    description: 'Developing and maintaining web applications using modern technologies.'
  },
  {
    title: 'Backend Developer Intern',
    company: 'Smallcase',
    time: '2024 – 2025',
    description: 'Collaborated with cross-functional teams to design and implement new features.'
  },
  {
    title: 'Full-stack Developer Intern',
    company: 'Dotsyndicate',
    time: '2018 – 2020',
    description: 'Assisted in the development and testing of software solutions.'
  }
];

export default function ExperienceSection() {
  return (
    <section className="bg-main text-foreground p-6 border-4 border-border shadow-[var(--shadow)] w-7xl mx-auto my-12 rounded-[var(--radius-base)]">
      <h2 className="text-4xl font-heading bg-blend-color-dodge mb-6">Experience</h2>
      <div className="bg-secondary-background p-6 rounded-[var(--radius-base)] border border-border">
        {experiences.map((exp, index) => (
          <div key={index} className="mb-6">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-heading">{exp.title}</h3>
              <span className="text-sm font-mono">{exp.time}</span>
            </div>
            <p className="text-lg font-semibold text-primary">{exp.company}</p>
            <p className="text-base mt-1 font-mono">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
