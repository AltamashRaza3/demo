export default function SectionHeading({ eyebrow, title, description, align = 'left', light = false }) {
  return (
    <div
      data-reveal
      className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}
    >
      {eyebrow && (
        <p className={`eyebrow mb-4 ${light ? 'text-blue-300' : ''}`}>{eyebrow}</p>
      )}
      <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.08] text-balance ${light ? 'text-white' : 'text-ink'}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-5 text-base sm:text-lg leading-relaxed ${light ? 'text-white/70' : 'text-ink-soft'}`}>
          {description}
        </p>
      )}
    </div>
  )
}
