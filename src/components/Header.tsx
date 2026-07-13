"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./Header.module.css";

const SECTIONS = [
  { id: "about", num: "01", label: "ABOUT", jp: "ENTHUSIASTSとは" },
  { id: "vision", num: "02", label: "VISION", jp: "ビジョン" },
  { id: "projects", num: "03", label: "PROJECTS", jp: "実装アプローチ" },
  { id: "member", num: "04", label: "MEMBER", jp: "推進メンバー" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuBtnRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

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

  const closeMenu = useCallback((returnFocus = true) => {
    setMenuOpen(false);
    if (returnFocus) menuBtnRef.current?.focus();
  }, []);

  // menu: lock page scroll, close on Escape, keep Tab inside the dialog
  useEffect(() => {
    if (!menuOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeMenu();
        return;
      }
      if (e.key !== "Tab") return;
      const focusables = [
        ...(panelRef.current?.querySelectorAll<HTMLElement>("a[href]") ?? []),
        menuBtnRef.current,
      ].filter((el): el is HTMLElement => el !== null);
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const current = document.activeElement as HTMLElement | null;
      if (!e.shiftKey && current === last) {
        e.preventDefault();
        first.focus();
      } else if (e.shiftKey && current === first) {
        e.preventDefault();
        last.focus();
      } else if (current && !focusables.includes(current)) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    panelRef.current?.querySelector("a")?.focus();
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [menuOpen, closeMenu]);

  return (
    <>
    <header className={`${styles.header} ${scrolled || menuOpen ? styles.scrolled : ""}`}>
      <a href="#top" className={styles.logo} onClick={() => closeMenu(false)}>
        ENTHUSIASTS
      </a>
      <nav className={styles.nav} aria-label="サイト内ナビゲーション">
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
        <a href="#contact" className={styles.contactLink} onClick={() => closeMenu(false)}>
          CONTACT
        </a>
        <button
          ref={menuBtnRef}
          type="button"
          className={styles.menuBtn}
          aria-expanded={menuOpen}
          aria-controls="site-menu"
          onClick={() => (menuOpen ? closeMenu() : setMenuOpen(true))}
        >
          {menuOpen ? "CLOSE" : "MENU"}
        </button>
      </nav>
    </header>

      {/* ヘッダーの backdrop-filter が fixed の包含ブロックを変えるため、パネルは兄弟要素に置く */}
      <div
        id="site-menu"
        ref={panelRef}
        className={`${styles.menuPanel} ${menuOpen ? styles.menuPanelOpen : ""}`}
        aria-hidden={!menuOpen}
      >
        <nav className={styles.menuList} aria-label="セクション一覧">
          {SECTIONS.map((s, i) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={styles.menuItem}
              style={{ transitionDelay: menuOpen ? `${0.06 + i * 0.05}s` : "0s" }}
              tabIndex={menuOpen ? 0 : -1}
              onClick={() => closeMenu(false)}
            >
              <span className={styles.menuNum}>{s.num}</span>
              <span className={styles.menuLabel}>{s.label}</span>
              <span className={styles.menuJp}>{s.jp}</span>
            </a>
          ))}
          <a
            href="#contact"
            className={`${styles.menuItem} ${styles.menuContact}`}
            style={{ transitionDelay: menuOpen ? `${0.06 + SECTIONS.length * 0.05}s` : "0s" }}
            tabIndex={menuOpen ? 0 : -1}
            onClick={() => closeMenu(false)}
          >
            <span className={styles.menuNum}>05</span>
            <span className={styles.menuLabel}>CONTACT</span>
            <span className={styles.menuJp}>お問い合わせ</span>
          </a>
        </nav>
      </div>
    </>
  );
}
