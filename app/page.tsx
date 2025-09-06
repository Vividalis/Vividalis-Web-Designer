import Nav from '../components/Nav'
import Marquee from '../components/Marquee'
import ContactForm from '../components/ContactForm'
import Tilt from '../components/Tilt'
import Reveal from '../components/Reveal'
import PathVertical from '../components/PathVertical'
import Hero3D from '../components/Hero3D'

export default function Page() {
  return (
    <main>
      <Nav />
      <section className="section container pt-28 relative min-h-[50vh]">
        <Hero3D />
        <div className="relative z-10 text-center space-y-6">
          <div className="flex justify-center gap-2 sm:gap-4 leading-none">
            {'V I V I D A L I S'.split(' ').map((ch, i) => (
              <span key={i} className="bigname">{ch}</span>
            ))}
          </div>
          <p className="max-w-2xl mx-auto text-balance opacity-80">
            Hello, I'm Vividalis. I build clean, performant websites with a focus on clarity and intent.
            Let’s Build Something Together. Your Vision, Our Mission.
          </p>
        </div>
      </section>

      <Marquee text="Web Design • UX/UI • Front-End Development • Digital Strategy • Responsive Design • UX Research • Web Development • Digital Branding" />

  <section id="skills" className="section container">
    <h2 className="text-3xl font-semibold mb-8">Skills</h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Reveal delay={0.0}> 
      <Tilt>
        <div className="panel">
          <h3 className="font-medium mb-2">Design</h3>
          <ul className="opacity-80 space-y-1 list-disc list-inside">
            <li>Modern UI/UX</li>
            <li>Responsive layouts</li>
            <li>Typography & color systems</li>
          </ul>
        </div>
      </Tilt>
      </Reveal>

      <Reveal delay={0.2}> 
      <Tilt>
        <div className="panel">
          <h3 className="font-medium mb-2">Development</h3>
          <ul className="opacity-80 space-y-1 list-disc list-inside">
            <li>Next.js (React)</li>
            <li>Tailwind CSS</li>
            <li>Forms & validation</li>
          </ul>
        </div>
      </Tilt>
      </Reveal>

      <Reveal delay={0.4}> 
      <Tilt>
        <div className="panel">
          <h3 className="font-medium mb-2">SEO & Performance</h3>
          <ul className="opacity-80 space-y-1 list-disc list-inside">
            <li>Core Web Vitals</li>
            <li>Metadata & sitemaps</li>
            <li>Image & asset optimization</li>
          </ul>
        </div>
      </Tilt>
      </Reveal>
    </div>
</section>

<section id="about" className="section container">

  <h2 className="text-3xl font-semibold mb-6">About</h2>
  <Reveal delay={0.6}> 
    <p className="max-w-3xl opacity-90">
      I’m Vividalis — a student and web designer focused on building modern, eye-catching, and SEO-optimized websites.
      I care about clean structure, fast load times, and content that ranks. In my free time I watch horror movies
      and experiment with game development. If you need a simple landing page or a full portfolio, I can plan, design,
      and ship it with a clear process.
    </p>
  </Reveal>
</section>


<section id="path" className="section container">
  <h2 className="text-3xl font-semibold mb-4">My path</h2>
  <p className="opacity-80 mb-6">
    A quick look at where I started and where I’m heading.
  </p>
  <PathVertical />
</section>


  <section id="contact" className="section container">
   
      <h2 className="text-3xl font-semibold mb-4">Contact me</h2>
      <p className="opacity-80 mb-6">
        Send me a message about your project and I’ll get back to you.
      </p>
    <ContactForm />
 

</section>

      <footer className="border-t border-white/10">
        <div className="container py-8 text-sm opacity-70">
          © {new Date().getFullYear()} vividalis
        </div>
      </footer>
    </main>
  )
}
