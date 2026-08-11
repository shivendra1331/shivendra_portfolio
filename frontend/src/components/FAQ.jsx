import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { faqs } from "../data/siteData";

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="py-24">
      <div className="mx-auto w-[min(900px,calc(100%-32px))]">
        <SectionTitle
          eyebrow="COMMON QUESTIONS"
          title={<>Clear <span className="text-emerald-500">answers.</span></>}
          description="A simple FAQ section for recruiters, clients and collaborators."
        />

        <div className="divide-y border-y  divide-white/5 border-white/10">
          {faqs.map((item, index) => {
            const active = open === index;
            return (
              <div key={item.question}>
                <button
                  onClick={() => setOpen(active ? -1 : index)}
                  className="flex w-full items-center justify-between gap-5 py-5 text-left"
                  aria-expanded={active}
                >
                  <span className="text-[12px] font-bold text-zinc-200">{item.question}</span>
                  <ChevronDown size={16} className={`shrink-0 text-emerald-500 transition ${active ? "rotate-180" : ""}`} />
                </button>
                {active && <p className="pb-5 pr-10 text-[12px] leading-6 text-zinc-400">{item.answer}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}