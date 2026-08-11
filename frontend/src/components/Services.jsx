import { Code2, Layers3, MonitorSmartphone, Search } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { services } from "../data/siteData";

const icons = [Code2, Layers3, MonitorSmartphone, Search];

export default function Services() {
  return (
    <section id="about" className="border-y py-24 border-white/5 bg-[#071008]">
      <div className="mx-auto w-[min(1160px,calc(100%-32px))]">
        <SectionTitle
          eyebrow="WHAT I DO"
          title={<>Powerful <span className="text-emerald-500">solutions</span> for real products.</>}
          description="I combine engineering, design awareness and problem solving to build web experiences that are useful, fast and easy to maintain."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((item, index) => {
            const Icon = icons[index];
            return (
              <article key={item.number} className="group min-h-[260px] border p-6 transition duration-300 hover:-translate-y-1 hover:border-emerald-400/40 hover:shadow-xl border-emerald/10 bg-white rounded-md">
                <div className="flex items-center justify-between">
                  <span className="grid h-9 w-9 place-items-center bg-emerald-400/10 text-emerald-500">
                    <Icon size={17} />
                  </span>
                  <span className="text-[10px] font-bold text-zinc-400">{item.number}</span>
                </div>
                <h3 className="mt-12 text-lg font-black tracking-[-.03em] text-black">{item.title}</h3>
                <p className="mt-3 text-[12px] leading-6 text-zinc-500">{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}