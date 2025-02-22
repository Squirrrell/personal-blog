import Link from "next/link"

export default function Home() {
  return (
    <div className="text-center space-y-8">
      <h1 className="text-4xl font-bold mb-6 text-foreground">Welcome to My Personal Blog</h1>
      <p className="text-xl mb-8 text-muted-foreground">
        Hi, I'm Denis. I'm a Computer Science student passionate about Computer Science.
      </p>
      <div className="relative inline-block group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
        <Link
          href="/about"
          className="relative px-7 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600"
        >
          <span className="flex items-center space-x-5">
            <span className="pr-6 text-gray-100">Learn More About Me</span>
          </span>
          <span className="pl-6 text-primary group-hover:text-gray-100 transition duration-200">&rarr;</span>
        </Link>
      </div>
    </div>
  )
}

