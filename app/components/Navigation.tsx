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
    <nav className="bg-secondary py-4">
      <ul className="flex justify-center space-x-6">
        {links.map(({ href, label, icon: Icon }) => (
          <li key={href}>
            <Link href={href} className="text-primary hover:text-primary-foreground transition-colors duration-200">
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

