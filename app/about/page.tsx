import Link from "next/link"
import { Github } from "lucide-react"
import AnimatedPage from "../components/AnimatedPage"

export default function About() {
  return (
    <AnimatedPage>
      
      <h1 className="text-3xl font-bold mb-6">About Me</h1>
      <div className="space-y-4 mb-12">
        <p>
          Hello! I'm Dobos Denis, a Computer Science student based in Iasi, Romania. I have a passion for Artificial Intelligence
          and I'm always excited to take on new challenges and learn new technologies.
        </p>
        <p>
        My journey in IT started with a curiosity about how technology works and a love for problem-solving. I began by exploring programming and networking, 
        learning bit by bit through practice and personal projects. Along the way, I've picked up new skills and worked on different aspects of IT, from 
        troubleshooting to building small applications. I'm always eager to learn more and grow in this ever-evolving field.
        </p>
        <p>When I'm not coding, you can usually find me taking walks in nature, enjoying the outdoors, or unwinding with video games.</p>
      </div>
      <h2 className="text-3xl font-semibold mb-6 mt-8">Contact</h2>
      <div className="space-y-4">
        <p>
          If you'd like to get in touch, feel free to reach out to me at{" "}
          <a href="mailto:denisdobos43@gmail.com" className="text-primary-600">
              denisdobos43@gmail.com
          </a>
        </p>
      </div> 
      <div className="mt-16 mb-8 flex items-center space-x-4">
        <a
          href="https://github.com/Squirrrell"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors duration-200"
        >
          <Github size={24} />
          <span className="sr-only">GitHub</span>
        </a>

        <Link
          href="/CV.pdf"
          className="w-12 h-12 flex items-center justify-center bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors duration-200 font-semibold"
        >
          CV
        </Link>
      </div>
      
    </AnimatedPage>
  )
}

