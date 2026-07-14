import Link from "next/link";
import styles from "./Footer.module.css";

const FOOTER_LINKS = [
  { href: "#about", label: "ABOUT" },
  { href: "#vision", label: "VISION" },
  { href: "#projects", label: "PROJECTS" },
  { href: "#member", label: "MEMBER" },
  { href: "#contact", label: "CONTACT" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wordmark} aria-hidden="true">
        ENTHUSIASTS
      </div>
      <nav className={styles.sitemap} aria-label="フッターナビゲーション">
        {FOOTER_LINKS.map((l) => (
          <a key={l.href} href={l.href} className={styles.sitemapLink}>
            {l.label}
          </a>
        ))}
        <Link href="/privacy-policy" className={styles.sitemapLink}>
          PRIVACY POLICY
        </Link>
      </nav>
      <div className={styles.bar}>
        <div className={styles.logo}>ENTHUSIASTS</div>
        <div className={styles.tagline}>才能を孤独にしないためのプロデュース共同体</div>
        <div className={styles.copyright}>© 2026 ENTHUSIASTS</div>
      </div>
    </footer>
  );
}
