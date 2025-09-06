type Project = {
  title: string
  href?: string
  image?: string
  tags?: string[]
}

export default function ProjectCard(p: Project) {
  return (
    <a
      href={p.href || '#'}
      className="group block border border-white/10 rounded-lg overflow-hidden hover:border-white/20 transition"
    >
      <div className="aspect-video bg-white/5" />
      <div className="p-4">
        <div className="font-medium">{p.title}</div>
        {p.tags?.length ? (
          <div className="mt-2 flex flex-wrap gap-2 text-xs opacity-70">
            {p.tags.map((t) => (
              <span key={t} className="px-2 py-1 rounded bg-white/5 border border-white/10">
                {t}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </a>
  )
}
