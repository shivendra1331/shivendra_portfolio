import { BriefcaseBusiness, CalendarDays, GraduationCap } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { experience } from "../data/siteData";

export default function Experience() {
  return (
    <section className="py-24">
      <div className="mx-auto w-[min(980px,calc(100%-32px))]">
        <SectionTitle
          eyebrow="MY DEVELOPMENT EVOLUTION"
          title={
            <>
              From learning to{" "}
              <span className="text-emerald-500">building.</span>
            </>
          }
          description="A simple timeline of the skills and development journey behind my current work."
        />

        <div className="relative">
          <div className="absolute left-[31px] top-0 hidden h-full w-px bg-gradient-to-b from-emerald-400/0 via-emerald-400/40 to-emerald-400/0 sm:block" />

          <div className="space-y-5">
            {experience.map((item, index) => (
              <article
                key={item.year}
                className="grid gap-4 sm:grid-cols-[145px_42px_1fr]"
              >
                <div className="flex items-center gap-2 text-[10px] font-bold text-zinc-400 sm:justify-end">
                  <CalendarDays size={13} className="text-emerald-500" />
                  {item.year}
                </div>

                <div className="relative hidden sm:flex sm:justify-center">
                  <span className="mt-1 grid h-7 w-7 place-items-center rounded-full border border-emerald-400/30 bg-emerald-400/10 text-emerald-500">
                    {index === 0 ? (
                      <GraduationCap size={13} />
                    ) : (
                      <BriefcaseBusiness size={13} />
                    )}
                  </span>
                </div>

                <div className="border p-5 border-white/10 bg-white/[.025]">
                  <p className="text-[9px] font-black tracking-[.14em] text-emerald-500">
                    {item.role}
                  </p>
                  <h3 className="mt-2 text-lg font-black text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-[12px] leading-6 text-zinc-400">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
