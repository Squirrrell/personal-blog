import AnimatedPage from "../components/AnimatedPage"
import Image from "next/image"

const projects = [
  {
    title: "Project Group",
    description: "University project for the LFAC course \n Collaborator: Munteanu Stefan",
    image: "/flex_yacc.png?height=200&width=300",
    link: "https://github.com/steve-warlock/LFAC-Project",
  },
  {
    title: "Autoclicker",
    description: "A simple autoclicker made in Python. \n Still in development.",
    image: "/mouse2.png?height=200&width=300",
    link: "https://github.com/Squirrrell/autoclicker",
  },
]

export default function Projects() {
  return (
    <AnimatedPage>
      <h1 className="text-3xl font-bold mb-6">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-secondary rounded-lg overflow-hidden shadow-lg">
            <div className="relative h-48 w-full">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain p-2"  // Changed from object-cover to object-contain and added padding
                priority
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-primary-200 mb-4 whitespace-pre-line">{project.description}</p>
              <a
                href={project.link}
                className="inline-block bg-primary text-secondary px-4 py-2 rounded-full font-medium hover:bg-opacity-90 transition-colors duration-200"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </AnimatedPage>
  )
}

