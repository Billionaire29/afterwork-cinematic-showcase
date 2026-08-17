import { useEffect, useRef, useState } from "react";

export const Cursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    let mx = 0, my = 0, rx = 0, ry = 0;
    const move = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; };
    window.addEventListener("mousemove", move);

    let raf = 0;
    const loop = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      if (dotRef.current) dotRef.current.style.transform = `translate(${mx}px, ${my}px)`;
      if (ringRef.current) ringRef.current.style.transform = `translate(${rx}px, ${ry}px)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHover(!!t.closest("a,button,[data-cursor]"));
    };
    window.addEventListener("mouseover", over);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="hidden md:block fixed top-0 left-0 w-2 h-2 rounded-full bg-accent pointer-events-none z-[100] -translate-x-1/2 -translate-y-1/2"
        style={{ marginLeft: "-4px", marginTop: "-4px" }}
      />
      <div
        ref={ringRef}
        className="hidden md:block fixed top-0 left-0 rounded-full border border-accent pointer-events-none z-[99] transition-[width,height,opacity] duration-200"
        style={{
          width: hover ? 56 : 28,
          height: hover ? 56 : 28,
          marginLeft: hover ? -28 : -14,
          marginTop: hover ? -28 : -14,
          opacity: hover ? 0.9 : 0.5,
        }}
      />
    </>
  );
};
