"use client";

import { useEffect, useState } from "react";
import styles from "./Header.module.css";

const SECTIONS = [
  { id: "about", label: "ABOUT" },
  { id: "vision", label: "VISION" },
  { id: "projects", label: "PROJECTS" },
  { id: "member", label: "MEMBER" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const els = SECTIONS.map((s) => document.getElementById(s.id)).filter(
      (el): el is HTMLElement => el !== null
    );
    let raf = 0;
    const update = () => {
      // the section under the reader's eye line (40% down the viewport)
      const line = window.innerHeight * 0.4;
      let current: string | null = null;
      for (const el of els) {
        const r = el.getBoundingClientRect();
        if (r.top <= line && r.bottom > line) {
          current = el.id;
          break;
        }
      }
      setActive(current);
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
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <a href="#top" className={styles.logo}>
        ENTHUSIASTS
      </a>
      <nav className={styles.nav}>
        <div className={styles.navLinks}>
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`${styles.navLink} ${active === s.id ? styles.active : ""}`}
              aria-current={active === s.id ? "true" : undefined}
            >
              {s.label}
            </a>
          ))}
        </div>
        <a href="#contact" className={styles.contactLink}>
          CONTACT
        </a>
      </nav>
    </header>
  );
}
