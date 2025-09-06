export type Milestone = {
  title: string
  when: string
  blurb: string
}

export const path: Milestone[] = [
  { title: 'Early experiments', when: '2018 →', blurb: 'C# and game dev prototypes. Learned problem-solving, debugging, and how to ship small things.' },
  { title: 'First shipped project', when: '2021', blurb: 'Built a simple shooter. It taught me scope, iteration, and finishing. Not pretty—finished.' },
  { title: 'Design foundations', when: '2022', blurb: 'UI/UX, typography, layout systems, accessibility basics. Design first, code second.' },
  { title: 'Modern stack', when: '2024', blurb: 'Next.js, Tailwind, accessibility, SEO-first builds.' },
  { title: 'Web Dev explorations', when: 'ongoing', blurb: 'Pushing visuals and performance: animations, micro-interactions, 3D/Canvas, and design systems.' },
  { title: 'What’s next', when: 'soon', blurb: 'Real client work, open-source components, sharper builds. More shipping, less talking.' }
]
