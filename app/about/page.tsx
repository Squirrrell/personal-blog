import AnimatedPage from "../components/AnimatedPage"

export default function About() {
  return (
    <AnimatedPage>
      <h1 className="text-3xl font-bold mb-6">About Me</h1>
      <div className="space-y-4">
        <p>
          Hello! I'm [Your Name], a [Your Profession] based in [Your Location]. I have a passion for [Your Interests]
          and I'm always excited to take on new challenges and learn new technologies.
        </p>
        <p>
          My journey in [Your Field] began [Brief background]. Since then, I've worked on various projects and
          continuously expanded my skill set.
        </p>
        <p>When I'm not coding, you can find me [Your Hobbies or Interests outside of work].</p>
      </div>
    </AnimatedPage>
  )
}

