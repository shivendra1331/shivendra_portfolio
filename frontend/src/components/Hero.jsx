import { ArrowUpRight, Code2, Github, Linkedin, Download } from "lucide-react";

import { site } from "../data/siteData";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#050807] text-white"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-[120px]" />

      <div className="mx-auto grid min-h-[calc(100vh-72px)] w-[min(1200px,calc(100%-32px))] items-center gap-12 py-16 md:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        {/* =========================================================
            LEFT SIDE
        ========================================================= */}
        <div className="order-2 lg:order-1">
          {/* Availability */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2 text-[10px] font-bold tracking-[0.16em] text-emerald-400">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_#34d399]" />
            AVAILABLE FOR OPPORTUNITIES
          </div>

          {/* Eyebrow */}
          <p className="mb-4 text-xs font-bold tracking-[0.18em] text-emerald-400">
            {site.hero.eyebrow}
          </p>

          {/* Main Heading */}
          <h2 className="max-w-[650px] text-3xl font-black leading-[0.95] tracking-[-0.055em] text-white sm:text-6xl md:text-7xl lg:text-[60px] xl:text-[65px]">
            {site.hero.title.split(" ").map((word, index) => {
              const highlighted =
                word.toLowerCase().includes("digital") ||
                word.toLowerCase().includes("beautifully") ||
                word.toLowerCase().includes("modern");

              return (
                <span
                  key={`${word}-${index}`}
                  className={highlighted ? "text-emerald-400" : ""}
                >
                  {word}{" "}
                </span>
              );
            })}
          </h2>

          {/* Description */}
          <p className="mt-7 max-w-[410px] text-sm leading-7 text-zinc-400 sm:text-[15px]">
            {site.hero.description}
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-md bg-emerald-400 px-6 py-3.5 text-xs font-black text-black transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-300 hover:shadow-[0_10px_35px_rgba(52,211,153,0.25)]"
            >
              Explore My Work
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            <a
              href={site.resume}
              download="Shivendra-Singh-CV.pdf"
              className="group inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/[0.02] px-6 py-3.5 text-xs font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400 hover:text-emerald-400"
            >
              <Download
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5"
              />
              Download CV
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-9 flex items-center gap-3">
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="grid h-11 w-11 place-items-center rounded-md border border-white/15 text-zinc-400 transition-all duration-300 hover:border-emerald-400 hover:bg-emerald-400/10 hover:text-emerald-400"
            >
              <Github size={18} />
            </a>

            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="grid h-11 w-11 place-items-center rounded-md border border-white/15 text-zinc-400 transition-all duration-300 hover:border-emerald-400 hover:bg-emerald-400/10 hover:text-emerald-400"
            >
              <Linkedin size={18} />
            </a>

            <a
              href={site.leetcode}
              target="_blank"
              rel="noreferrer"
              aria-label="LeetCode"
              className="grid h-11 w-11 place-items-center rounded-md border border-white/15 text-zinc-400 transition-all duration-300 hover:border-emerald-400 hover:bg-emerald-400/10 hover:text-emerald-400"
            >
              <Code2 size={18} />
            </a>
          </div>
        </div>

        {/* =========================================================
            RIGHT PROFILE CARD
        ========================================================= */}
        <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
          <div className="relative w-full max-w-[410px]">
            {/* Green Glow Behind Card */}
            <div className="pointer-events-none absolute -inset-8 rounded-[32px] bg-emerald-500/10 blur-[70px]" />

            {/* Profile Card */}
            <div className="relative overflow-hidden rounded-[22px] border border-emerald-400/20 bg-gradient-to-br from-[#123c2c] via-[#0d2019] to-[#101413] p-3 shadow-[0_20px_80px_rgba(0,0,0,0.45)] transition-all duration-500 hover:border-emerald-400/40 hover:shadow-[0_25px_90px_rgba(16,185,129,0.12)] max-[770px]:mt-[15px]">
              {/* Image Container */}
              <div className="relative flex justify-center overflow-hidden rounded-full bg-[#e9e9e9]">
                {/* Soft circle behind image */}
                <div className="absolute left-1/2 top-1/2 h-[92%] w-[92%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#eeeeee]" />

                {/* Profile Image */}
                <img
                  src={site.photo}
                  alt={site.name}
                  className="relative z-10 aspect-square w-full object-contain"
                />
              </div>

              {/* Profile Information */}
              <div className="px-5 pb-5 pt-5 sm:px-7 sm:pb-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
                      {site.name}
                    </h2>

                    <p className="mt-1 text-xs font-medium text-zinc-400">
                      {site.role}
                    </p>
                  </div>

                  {/* Degree */}
                  <span className="shrink-0 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-[10px] font-bold text-emerald-400">
                    MCA
                  </span>
                </div>

                {/* Stack */}
                <div className="mt-5">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-400">
                    Stack
                  </p>

                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm font-medium text-zinc-300 my-1">
                    <span>React</span>

                    <span className="text-emerald-400">•</span>

                    <span>Node.js</span>

                    <span className="text-emerald-400">•</span>

                    <span>Express</span>

                    <span className="text-emerald-400">•</span>

                    <span>MongoDB</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Stack Card */}
            <div className="absolute -bottom-6 -left-5 hidden rounded-md border border-emerald-400/20 bg-[#07100c]/95 px-5 py-4 shadow-2xl backdrop-blur-xl md:block">
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-emerald-400">
                Full Stack
              </p>

              <p className="mt-1.5 text-xs font-bold text-zinc-200">
                React · Node · MongoDB
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
