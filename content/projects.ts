export type Project = {
  title: string
  href?: string
  image?: string
  tags?: string[]
}

export const projects: Project[] = [
  { title: 'Brand Alpha', tags: ['Identity', 'Web'] },
  { title: 'Studio Beta', tags: ['Strategy', 'UI'] },
  { title: 'Campaign Gamma', tags: ['Art Direction'] },
  { title: 'Shop Delta', tags: ['E-commerce'] },
  { title: 'Product Epsilon', tags: ['Landing'] },
  { title: 'Event Zeta', tags: ['Microsite'] },
]
