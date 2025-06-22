const experiences = [
  {
    title: 'Founding Engineer',
    company: 'ChatterBox',
    time: '2025 – Present',
    description: 'Developing and maintaining web applications using modern technologies.',
    bullets: [
      "Built live conversation infrastructure reducing latency by 80%.",
      "Designed and deployed scalable micro-services architecture.",
      "Collaborated on backend systems to support global usage."
    ]
  },
  {
    title: 'Backend Developer Intern',
    company: 'Smallcase',
    time: '2024 – 2025',
    description: 'Collaborated with cross-functional teams to design and implement new features.',
    bullets: [
      "Integrated Google reCAPTCHA to prevent spam and bot traffic.",
      "Built monitoring pipelines using Kibana, Elasticsearch, and cron-jobs.",
      "Leveraged Kafka for high-throughput real-time data pipelines.",
      "Developed production-grade APIs using MongoDB, TypeScript, and Express."
    ]
  },
  {
    title: 'Full-stack Developer Intern',
    company: 'Dotsyndicate',
    time: '2024 – 2024',
    description: 'Assisted in the development and testing of software solutions.',
    bullets: [
      "Designed multi-tenant architecture with MongoDB for scalable apps.",
      "Implemented CI/CD pipelines to cut deployment time by 44%.",
      "Automated cron jobs using AWS Lambda and EventBridge.",
      "Improved API speed by 30% with Redis-based caching layer."
    ]
  }
];


export default function ExperienceSection() {
  return (
    <section className="bg-main text-foreground p-6 border-4 border-border shadow-[var(--shadow)] mx-auto my-12 rounded-[var(--radius-base)] md:w-7xl" id="journey">
      <h2 className=" text-3xl font-heading bg-blend-color-dodge mb-6 md:text-4xl">Journey 💼</h2>
      <div className=" flex flex-col  bg-secondary-background p-6 rounded-[var(--radius-base)] border border-border">
        {experiences.map((exp, index) => (
          <div key={index} className="mb-6 border-b flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-heading md:text-2xl">{exp.company}</h3>
              <span className="text-sm font-mono">{exp.time}</span>
            </div>
            <p className="text-lg font-semibold text-primary "><u>{exp.title}</u></p>
            <ul className="list-disc px-6 flex flex-col gap-2" >
              {exp.bullets.map((bullet, index) => (
                <li key={index} className="text-overflow:truncate">{exp.bullets[index]}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
