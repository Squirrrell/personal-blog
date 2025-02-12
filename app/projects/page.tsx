import AnimatedPage from "../components/AnimatedPage"
import Image from "next/image"

const projects = [
  {
    title: "Project 1",
    description: "A brief description of Project 1",
    image: "/placeholder.svg?height=200&width=300",
    link: "#",
  },
  {
    title: "Project 2",
    description: "A brief description of Project 2",
    image: "/placeholder.svg?height=200&width=300",
    link: "#",
  },
  {
    title: "Project 3",
    description: "A brief description of Project 3",
    image: "/placeholder.svg?height=200&width=300",
    link: "#",
  },
]

export default function Projects() {
  return (
    <AnimatedPage>
      <h1 className="text-3xl font-bold mb-6">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-secondary rounded-lg overflow-hidden shadow-lg">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-primary-200 mb-4">{project.description}</p>
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

