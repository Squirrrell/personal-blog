import AnimatedPage from "./components/AnimatedPage"
import Link from "next/link"

export default function Home() {
  return (
    <AnimatedPage>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-6 text-foreground">Welcome to My Personal Blog</h1>
        <p className="text-xl mb-8 text-foreground">
          Hi, I'm [Your Name]. I'm a [Your Profession] passionate about [Your Interests].
        </p>
        <Link
          href="/about"
          className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors duration-200"
        >
          Learn More About Me
        </Link>
      </div>
    </AnimatedPage>
  )
}

