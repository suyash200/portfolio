const experiences = [
  {
    title: 'Founding Engineer',
    company: 'ChatterBox',
    time: '2025 – Present',
    description: 'Developing and maintaining web applications using modern technologies.',
    bullets: ["Live Conversation reducing latency by 80%", "Developed micro-services", "world"]
  },
  {
    title: 'Backend Developer Intern',
    company: 'Smallcase',
    time: '2024 – 2025',
    description: 'Collaborated with cross-functional teams to design and implement new features.',
    bullets: [
      "Implemented Google reCAPTCHA to enhance website security, effectively combating spam and bot attacks.",
      "Engineered a robust monitoring system using Kibana, Elasticsearch, and cron-jobs for real-time data analysis and troubleshooting.",
      "Created security alerts on Sentry to proactively identify and address potential vulnerabilities.",
      "Using Kafka for real-time data analysis.",
      "Developed APIs to handle critical workflows using MongoDB, TypeScript, and Express."
    ]
  },
  {
    title: 'Full-stack Developer Intern',
    company: 'Dotsyndicate',
    time: '2024 – 2024',
    description: 'Assisted in the development and testing of software solutions.',
    bullets: [
      "Architected multi-tenant architecture using MongoDB, ensuring scalability and efficiency.",
      "Streamlined deployment by using CI/CD pipelines, reducing deployment time by 44%.",
      "Automated cron-jobs using AWS Lambda and EventBridge.",
      "Implemented cache layer using Redis, reducing API response time by 30%."
    ]
  }
];

export default function ExperienceSection() {
  return (
    <section className="bg-main text-foreground p-6 border-4 border-border shadow-[var(--shadow)] mx-auto my-12 rounded-[var(--radius-base)] md:w-7xl" id="exp">
      <h2 className=" text-3xl font-heading bg-blend-color-dodge mb-6 md:text-4xl">Experience</h2>
      <div className=" flex flex-col bg-secondary-background p-6 rounded-[var(--radius-base)] border border-border">
        {experiences.map((exp, index) => (
          <div key={index} className="mb-6 border-b flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-heading md:text-2xl">{exp.company}</h3>
              <span className="text-sm font-mono">{exp.time}</span>
            </div>
            <p className="text-lg font-semibold text-primary "><u>{exp.title}</u></p>
            <ul className="list-disc px-6 flex flex-col gap-2" >
              {exp.bullets.map((bullet, index) => (
                <li key={index}>{exp.bullets[index]}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
