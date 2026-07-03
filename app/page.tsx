import Link from "next/link"
import { User, FolderOpen, Briefcase, Github, ArrowRight } from "lucide-react"
import AnimatedPage from "./components/AnimatedPage"

const quickLinks = [
  {
    href: "/about",
    icon: User,
    title: "About",
    description: "My background, interests, and what drives me.",
  },
  {
    href: "/projects",
    icon: FolderOpen,
    title: "Projects",
    description: "Things I've built while learning and experimenting.",
  },
  {
    href: "/cv",
    icon: Briefcase,
    title: "CV",
    description: "My education, experience, and technical skills.",
  },
]

export default function Home() {
  return (
    <AnimatedPage>
      <section className="min-h-[60vh] flex flex-col justify-center max-w-3xl mx-auto text-center md:text-left">
        <p className="text-sm font-medium uppercase tracking-widest text-primary mb-4">
          Computer Science Student &middot; Iași, Romania
        </p>
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
          Dobos <span className="text-primary">Denis</span>
        </h1>
        <p className="text-xl md:text-2xl text-foreground/90 mb-4">
          Building things with code, solving problems, and always learning what&apos;s next.
        </p>
        <p className="text-base text-muted-foreground mb-8 max-w-xl mx-auto md:mx-0">
          I&apos;m a CS student who loves turning curiosity into working software &mdash; from small
          tools to university projects. Take a look around to see what I&apos;m working on.
        </p>
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 bg-primary text-secondary font-medium rounded-full px-6 py-3 hover:bg-primary/90 transition-colors duration-200"
          >
            About Me
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center rounded-full border border-border text-foreground px-6 py-3 hover:border-primary hover:text-primary transition-colors duration-200"
          >
            View Projects
          </Link>
        </div>
        <div className="mt-8 flex items-center gap-4 justify-center md:justify-start">
          <a
            href="https://github.com/Squirrrell"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            <Github size={22} />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="mailto:denisdobos43@gmail.com"
            className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            denisdobos43@gmail.com
          </a>
        </div>
      </section>

      <section className="max-w-4xl mx-auto mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {quickLinks.map(({ href, icon: Icon, title, description }) => (
          <Link
            key={href}
            href={href}
            className="group bg-secondary/80 border border-border rounded-lg p-6 hover:border-primary/50 transition-colors duration-200"
          >
            <Icon className="w-6 h-6 text-primary mb-4" />
            <h2 className="font-semibold text-foreground mb-2 flex items-center gap-1">
              {title}
              <ArrowRight className="w-4 h-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
            </h2>
            <p className="text-muted-foreground text-sm">{description}</p>
          </Link>
        ))}
      </section>
    </AnimatedPage>
  )
}
