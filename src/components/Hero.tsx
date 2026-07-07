"use client";

import { useEffect, useRef } from "react";
import { startAsciiSphere } from "@/lib/asciiSphere";
import styles from "./Hero.module.css";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    return startAsciiSphere(canvas);
  }, []);

  // the hero copy lingers slightly and dissolves as you leave —
  // the page pulls you out of it rather than cutting away
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = contentRef.current;
    if (!el) return;
    let raf = 0;
    const update = () => {
      const y = window.scrollY;
      const h = window.innerHeight;
      const p = Math.min(1, y / (h * 0.72));
      el.style.opacity = (1 - p).toFixed(3);
      el.style.transform = `translateY(${(y * 0.18).toFixed(1)}px)`;
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="top" className={styles.hero}>
      <canvas ref={canvasRef} className={styles.canvas} />
      <div className={styles.overlay} />
      <div ref={contentRef} className={styles.content}>
        <div className={styles.labelRow}>
          <span className={styles.dot} />
          <span className={styles.label}>HUMAN POTENTIAL PRODUCE PROJECT</span>
        </div>
        <h1 className={styles.headline}>
          <span className={styles.lineWrap}>
            <span className={styles.line} style={{ animationDelay: "0.3s" }}>
              Producing
            </span>
          </span>
          <span className={styles.lineWrap}>
            <span className={styles.line} style={{ animationDelay: "0.44s" }}>
              the potential
            </span>
          </span>
          <span className={styles.lineWrap}>
            <span className={styles.line} style={{ animationDelay: "0.58s" }}>
              of every human
            </span>
          </span>
        </h1>
        <div className={styles.bottomRow}>
          <p className={styles.lead}>
            「きっかけの格差」によって埋もれてしまう才能を、仲間・戦略・ブランド・資本・コミュニティの力で社会に実装する。一人ひとりが、自分の人生の主人公として生きられる世界へ。
          </p>
          <div className={styles.scrollCueWrap}>
            <span className={styles.scrollLabel}>SCROLL</span>
            <span className={styles.scrollLine} />
          </div>
        </div>
      </div>
    </section>
  );
}
