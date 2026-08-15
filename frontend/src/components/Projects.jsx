import { ArrowUpRight, Github } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { projects } from "../data/siteData";

export default function Projects() {
  return (
    <section id="work" className="border-y py-24 border-white/5 bg-[#071008]">
      <div className="mx-auto w-[min(1160px,calc(100%-32px))]">
        <SectionTitle
          eyebrow="CASE STUDIES"
          title={<>Selected <span className="text-emerald-500">work.</span></>}
          description="A selection of projects that show how I approach product interfaces, frontend engineering and full-stack development."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article key={project.title} className="group overflow-hidden border   transition duration-300 hover:-translate-y-1 hover:border-emerald-400/40 hover:shadow-2xl border-white/10 bg-black/5">
              <div className="relative aspect-[16/10] overflow-hidden bg-white">
                <img src={project.image} alt="" className="object-cover transition duration-500 group-hover:scale-105" />
                <span className="absolute left-3 top-3 bg-black/70 px-2 py-1 text-[8px] font-black tracking-widest text-emerald-400 backdrop-blur">{project.category}</span>
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-black tracking-[-.03em] text-white">{project.title}</h3>
                  <span className="text-[9px] font-bold text-white">0{index + 1}</span>
                </div>
                <p className="mt-2 text-[12px] leading-6 text-zinc-400">{project.description}</p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.map(tag => (
                    <span key={tag} className="border px-2 py-1 text-[9px] font-semibold  border-white/10 text-zinc-400">{tag}</span>
                  ))}
                </div>

                <div className="mt-5 flex items-center justify-between border-t  pt-4 border-white/5">
                  <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-[10px] font-bold hover:text-emerald-500 text-zinc-300">
                    <Github size={14} /> Source
                  </a>
                  <a href={project.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-[10px] font-black text-emerald-500">
                    View Project <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
