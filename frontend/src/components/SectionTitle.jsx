export default function SectionTitle({ eyebrow, title, description, center = true }) {
  return (
    <div className={`mb-12 ${center ? "text-center" : "text-left"}`}>
      <p className="mb-3 text-[10px] font-black tracking-[.18em] text-emerald-500">{eyebrow}</p>
      <h2 className="text-3xl font-black tracking-[-.055em] sm:text-5xl text-white">
        {title}
      </h2>
      {description && (
        <p className={`mx-auto mt-4 max-w-2xl text-[13px] leading-7 text-zinc-500 dark:text-zinc-400 ${center ? "" : "mx-0"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
