import { Mail, Phone, ArrowUpRight, Download } from "lucide-react";
import { site } from "../data/siteData";

export default function Contact() {
  return (
    <section id="contact" className="py-12 sm:py-24">
      <div className="mx-auto w-[min(1160px,calc(100%-32px))]">
        <div className="grid overflow-hidden border border-emerald-500/20 bg-emerald-500/[.035] lg:grid-cols-[1fr_1fr]">
          <div className="p-7 sm:p-10">
            <p className="text-[10px] font-black tracking-[.18em] text-emerald-500"> CONTACT</p>
            <h2 className="mt-4 max-w-xl text-4xl font-black leading-none tracking-[-.055em]  sm:text-6xl text-white">
              Let&apos;s discuss your <span className="text-emerald-500">next idea.</span>
            </h2>
            <p className="mt-5 max-w-lg text-[13px] leading-7 text-zinc-400">
              Have a project, opportunity or just want to connect? Send me a message and I&apos;ll get back to you.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 bg-emerald-400 px-5 py-3 text-[11px] font-black text-black hover:bg-emerald-300">
                Email Me <ArrowUpRight size={14} />
              </a>
              <a href={site.resume} download="Shivendra-Singh-CV.pdf" className="inline-flex items-center gap-2 border px-5 py-3 text-[11px] font-bold  border-white/10 bg-white/[.03] text-white">
                <Download size={14} /> Download CV
              </a>
            </div>
          </div>

          <div className="border-t bg-zinc-300 p-7 sm:p-10 lg:border-l lg:border-t-0 border-white/5 ">
            <div className="space-y-3">
              <a href={`mailto:${site.email}`} className="flex items-center gap-4 border  p-4 transition hover:border-emerald-400/40 border-white/10">
                <span className="grid h-10 w-10 place-items-center bg-emerald-400/10 text-emerald-500"><Mail size={17} /></span>
                <span>
                  <small className="block text-[9px] font-bold uppercase tracking-widest text-zinc-400">Email</small>
                  <strong className="mt-1 block text-[12px] text-black">{site.email}</strong>
                </span>
              </a>

              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="flex items-center gap-4 border p-4 transition hover:border-emerald-400/40 border-white/10">
                <span className="grid h-10 w-10 place-items-center bg-emerald-400/10 text-emerald-500"><Phone size={17} /></span>
                <span>
                  <small className="block text-[9px] font-bold uppercase tracking-widest text-zinc-400">Phone</small>
                  <strong className="mt-1 block text-[12px] text-black">{site.phone}</strong>
                </span>
              </a>

              <div className="relative mt-5 h-36 overflow-hidden border border-white/10 bg-[#0d1b12]">
                <div className="absolute inset-0 opacity-50" style={{backgroundImage: "linear-gradient(30deg, transparent 48%, rgba(16,185,129,.2) 49%, transparent 50%), linear-gradient(120deg, transparent 48%, rgba(16,185,129,.15) 49%, transparent 50%)", backgroundSize: "42px 42px"}} />
                <div className="absolute left-[62%] top-[38%] h-4 w-4 rounded-full bg-emerald-500 shadow-[0_0_0_8px_rgba(16,185,129,.15)]" />
                <div className="absolute bottom-3 left-3  px-3 py-2 text-[9px] font-bold  bg-zinc-950/90 text-zinc-300">{site.location}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
