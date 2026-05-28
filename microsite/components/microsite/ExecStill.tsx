interface ExecStillProps {
  name: string;
  role: string;
}

export function ExecStill({ name, role }: ExecStillProps) {
  return (
    <div
      className="relative aspect-[16/9] rounded-[2px] overflow-hidden"
      style={{
        background:
          'radial-gradient(120% 80% at 50% 100%, #2b58ff 0%, #0a1f99 35%, #06104d 70%, #02061f 100%)',
      }}
      aria-label={`Portret prelegenta: ${name}`}
    >
      <span
        className="absolute pointer-events-none"
        style={{
          left: '22%',
          bottom: '-8%',
          width: '56%',
          height: '110%',
          background:
            'radial-gradient(50% 55% at 50% 30%, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 60%)',
          filter: 'blur(2px)',
        }}
      />
      <span
        className="absolute"
        style={{
          left: '50%',
          bottom: '8%',
          width: '26%',
          aspectRatio: '3 / 4',
          transform: 'translateX(-50%)',
          background: 'linear-gradient(180deg, #1b2540 0%, #0a1230 60%, #050817 100%)',
          borderRadius: '38% 38% 4% 4% / 30% 30% 4% 4%',
          boxShadow:
            '0 24px 40px rgba(0,0,0,0.4), inset 0 -20px 30px rgba(0,0,0,0.5)',
        }}
      >
        <span
          className="absolute"
          style={{
            left: '18%',
            top: '12%',
            width: '30%',
            height: '28%',
            background:
              'radial-gradient(60% 60% at 50% 50%, rgba(255,255,255,0.16), rgba(255,255,255,0))',
            borderRadius: '50%',
          }}
        />
      </span>
      <span
        className="absolute left-0 right-0 bottom-0"
        style={{
          height: '14%',
          background:
            'linear-gradient(180deg, rgba(20,30,70,0) 0%, rgba(8,14,40,0.7) 100%)',
        }}
      />
      <span
        className="absolute"
        style={{
          left: '50%',
          bottom: '6%',
          width: '22%',
          height: '6%',
          transform: 'translateX(-50%)',
          background: 'linear-gradient(180deg, #c5cad6, #6a7185)',
          borderRadius: '2px 2px 0 0',
        }}
      />
      <span
        className="absolute right-[5%] top-[18%] text-right text-white font-mono text-[11px] tracking-[0.16em] leading-[1.5]"
      >
        <span className="font-display font-black text-[clamp(14px,1.6vw,22px)] tracking-[0.04em] block">
          {name}
        </span>
        {role}
      </span>
      <span
        aria-hidden
        className="absolute left-[6%] top-[8%] grid place-items-center"
        style={{
          width: 36,
          height: 36,
          border: '1px solid rgba(255,255,255,0.6)',
          borderRadius: '50%',
        }}
      >
        <span
          style={{
            borderLeft: '8px solid #fff',
            borderTop: '5px solid transparent',
            borderBottom: '5px solid transparent',
            marginLeft: 2,
            display: 'block',
            width: 0,
            height: 0,
          }}
        />
      </span>
    </div>
  );
}
