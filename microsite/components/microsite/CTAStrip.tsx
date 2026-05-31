interface CTAStripProps {
  line1: string;
  line2: string;
  cta: string;
}

export function CTAStrip({ line1, line2, cta }: CTAStripProps) {
  return (
    <section className="bg-blue text-white px-6 desktop:px-14 py-10 flex flex-col desktop:flex-row gap-6 desktop:gap-10 justify-between items-start desktop:items-center">
      <div className="font-display font-black tracking-[-0.01em] leading-[1.1] text-[clamp(22px,2.4vw,34px)]">
        {line1}
        <br />
        {line2}
      </div>
      <a
        href="#"
        className="font-mono font-medium text-[13px] tracking-[0.2em] uppercase border-b border-white pb-1 whitespace-nowrap"
      >
        {cta} &nbsp;›
      </a>
    </section>
  );
}
