export default function Marquee({ text }: { text: string }) {
  return (
    <div className="marquee">
      <div className="marquee-track">
        <span className="mx-6">{text}</span>
        <span className="mx-6">{text}</span>
        <span className="mx-6">{text}</span>
        <span className="mx-6">{text}</span>
      </div>
    </div>
  )
}
