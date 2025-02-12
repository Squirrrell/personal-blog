import { Copyright } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-secondary/50 backdrop-blur-sm py-4 text-center">
      <p className="text-muted-foreground text-sm">
        &copy; {new Date().getFullYear()} Your Name. All rights reserved. <Copyright className="inline w-4 h-4" />
      </p>
    </footer>
  )
}

