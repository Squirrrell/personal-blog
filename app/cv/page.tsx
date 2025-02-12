import AnimatedPage from "../components/AnimatedPage"

export default function CV() {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Tech Company",
      period: "2020 - Present",
      description: "Developed and maintained web applications using React and Node.js.",
    },
    {
      title: "Junior Developer",
      company: "Startup Inc.",
      period: "2018 - 2020",
      description: "Worked on front-end development using HTML, CSS, and JavaScript.",
    },
  ]

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University Name",
      year: "2018",
    },
  ]

  const skills = ["JavaScript", "React", "Node.js", "Python", "Git"]

  return (
    <AnimatedPage>
      <h1 className="text-3xl font-bold mb-6">Curriculum Vitae</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>
        {experiences.map((exp, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-xl font-medium">{exp.title}</h3>
            <p className="text-primary-600">
              {exp.company} | {exp.period}
            </p>
            <p>{exp.description}</p>
          </div>
        ))}
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        {education.map((edu, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-xl font-medium">{edu.degree}</h3>
            <p>
              {edu.school} | {edu.year}
            </p>
          </div>
        ))}
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span key={index} className="bg-primary text-secondary px-3 py-1 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
      </section>
    </AnimatedPage>
  )
}

