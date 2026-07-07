import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wordmark} aria-hidden="true">
        ENTHUSIASTS
      </div>
      <div className={styles.bar}>
        <div className={styles.logo}>ENTHUSIASTS</div>
        <div className={styles.tagline}>才能を孤独にしないためのプロデュース共同体</div>
        <div className={styles.right}>
          <Link href="/privacy-policy" className={styles.privacyLink}>
            PRIVACY POLICY
          </Link>
          <div className={styles.copyright}>© 2026 ENTHUSIASTS</div>
        </div>
      </div>
    </footer>
  );
}
