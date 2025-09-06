export default function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-black/60 backdrop-blur border-b border-white/10">
      <nav className="container h-14 flex items-center justify-between">
        <a href="#" className="font-semibold">vividalis</a>
        <div className="flex items-center gap-6 text-sm opacity-80">
          <a href="#portfolio">Skills</a>
          <a href="#about">About</a>
          <a href="#path">Path</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
    </header>
  )
}
