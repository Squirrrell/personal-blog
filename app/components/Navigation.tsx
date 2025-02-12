import Link from "next/link"
import { Home, User, Briefcase, FolderOpen } from "lucide-react"

const links = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: User },
  { href: "/cv", label: "CV", icon: Briefcase },
  { href: "/projects", label: "Projects", icon: FolderOpen },
]

export default function Navigation() {
  return (
    <nav className="bg-secondary/50 backdrop-blur-sm py-4 sticky top-0 z-10">
      <ul className="flex justify-center space-x-6">
        {links.map(({ href, label, icon: Icon }) => (
          <li key={href}>
            <Link href={href} className="text-muted-foreground hover:text-primary transition-colors duration-200">
              <div className="flex flex-col items-center">
                <Icon className="w-6 h-6 mb-1" />
                <span className="text-sm">{label}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

