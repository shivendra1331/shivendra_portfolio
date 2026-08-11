import { useState } from "react";
import { Download, Github, Linkedin, Menu, Moon, Sun, X } from "lucide-react";
import { site } from "../data/siteData";

const links = [
  ["Home", "home"],
  ["About", "about"],
  ["Work", "work"],
  ["Contact", "contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b  bg-black/10 backdrop-blur-xl border-white/5 ">
      <div className="mx-auto flex h-[60px] w-[min(1160px,calc(100%-32px))] items-center justify-between">
        <button
          onClick={() => go("home")}
          className="flex items-center gap-2 font-black tracking-[-.04em] text-white cursor-pointer"
        >
          <span className="grid h-8 w-8 place-items-center rounded-md bg-emerald-400 text-2xl text-white">
            S
          </span>
          <span className="text-2xl">
            {site.shortName}
            <span className="text-emerald-500 text-2xl">.</span>
          </span>
        </button>

        <nav
          className={`${open ? "flex" : "hidden"} absolute left-4 right-4 top-[80px] flex-col gap-1 rounded-2xl border p-3 shadow-2xl md:static md:flex md:flex-row md:items-center md:border-0 md:bg-transparent md:p-0 md:shadow-none border-white/10 bg-zinc-950`}
        >
          {links.map(([label, id]) => (
            <button
              key={id}
              onClick={() => go(id)}
              className="rounded-lg px-3 py-2 text-left text-[14px] font-semibold  transition  text-zinc-350 hover:text-emerald-400 md:text-center cursor-pointer"
            >
              {label}
            </button>
          ))}

          <a
            href={site.resume}
            download="Shivendra-Singh-CV.pdf"
            className="mt-1 inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-400 px-3 py-2 text-[12px] font-bold text-black transition hover:bg-emerald-300 md:ml-2 md:mt-0"
          >
            <Download size={14} />
            Download CV
          </a>

          <div className="mt-1 flex items-center gap-1 md:ml-1 md:mt-0">
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              className="grid h-8 w-8 place-items-center rounded-lg text-zinc-500 hover:text-emerald-500"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              className="grid h-8 w-8 place-items-center rounded-lg text-zinc-500 hover:text-emerald-500"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
          </div>
        </nav>

        <button
          className="grid h-9 w-9 place-items-center rounded-lg md:hidden text-zinc-200"
          onClick={() => setOpen(!open)}
          aria-label="Open menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
    </header>
  );
}
