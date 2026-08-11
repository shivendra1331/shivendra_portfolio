import { Github, Linkedin, Code2, ArrowUp } from "lucide-react";
import { site } from "../data/siteData";

export default function Footer() {
  const top = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t py-8 border-white/5">
      <div className="mx-auto flex w-[min(1160px,calc(100%-32px))] flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[10px] text-zinc-500">
          © {new Date().getFullYear()} {site.name}.
        </p>
        <div className="flex items-center gap-2">
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="text-zinc-500 hover:text-emerald-500"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-zinc-500 hover:text-emerald-500"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
          <a
            href={site.leetcode}
            target="_blank"
            rel="noreferrer"
            className="text-zinc-500 hover:text-emerald-500"
            aria-label="LeetCode"
          >
            <Code2 size={16} />
          </a>
          <button
            onClick={top}
            className="ml-2 grid h-8 w-8 place-items-center border text-zinc-500 hover:text-emerald-500 border-white/10"
            aria-label="Back to top"
          >
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
