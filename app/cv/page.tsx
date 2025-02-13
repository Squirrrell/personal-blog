import AnimatedPage from "../components/AnimatedPage"

export default function CV() {
  const experiences = [
    {
      title: "Personal Projects & Development",
      company: "Self-Directed",
      period: "2023 - Present",
      description: "Working on personal projects involving web development.\n Exploring programming languages such as JavaScript, Python, and Java.\n Developing problem-solving skills through competitive programming and university coursework.",
    },
  ]

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "Alexandru Ioan Cuza University of Iași (UAIC)",
      year: " 2023 - Present",
    },
    {
      degree: "High School Diploma - Mathematics & Computer Science",
      school: "National College \"Costache Negruzzi\" Iași",
      year: "2019 - 2023",
    },
    {
      degree: "Middle School",
      school: "National College \"Costache Negruzzi\" Iași",
      year: "2015 - 2019",
    },
  ]

  const skills = ["C++", "Python", "Git"]

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
            <p className="whitespace-pre-line">{exp.description}</p>
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

