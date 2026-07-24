import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { privacySections } from "@/data/content";
import styles from "@/components/PrivacyPolicy.module.css";

export const metadata: Metadata = {
  title: "プライバシーポリシー — ENTHUSIASTS",
};

export default function PrivacyPolicyPage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Link href="/" className={styles.headerLogo} aria-label="ENTHUSIASTS — トップへ">
          <Image
            src="/assets/logo-enthusiasts.png"
            alt="ENTHUSIASTS"
            width={971}
            height={91}
            priority
            className={styles.headerLogoImg}
          />
        </Link>
        <Link href="/" className={styles.backLink}>
          ← BACK TO HOME
        </Link>
      </header>

      <main className={styles.main}>
        <div className={styles.eyebrow}>PRIVACY POLICY</div>
        <h1 className={styles.h1}>プライバシーポリシー</h1>
        <p className={styles.intro}>
          ENTHUSIASTS（以下「当団体」といいます）は、お問い合わせ等を通じて取得する個人情報の重要性を認識し、以下の方針に基づき適切に取り扱います。
        </p>

        <div className={styles.sections}>
          {privacySections.map((s) => (
            <section key={s.num} className={styles.sectionBlock}>
              <div className={styles.sectionHead}>
                <span className={styles.sectionNum}>{s.num}</span>
                <h2 className={styles.sectionTitle}>{s.title}</h2>
              </div>
              <div>
                {s.paras.map((p, i) => (
                  <p key={i} className={styles.sectionPara}>
                    {p}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className={styles.contactBox}>
          <div className={styles.contactBoxLabel}>お問い合わせ窓口</div>
          <p className={styles.contactBoxText}>
            個人情報の取扱いに関するお問い合わせは、下記までご連絡ください。
            <br />
            <a href="mailto:satokichi1019@gmail.com">satokichi1019@gmail.com</a>
          </p>
        </div>

        <div className={styles.dateLine}>制定日：2026年7月7日</div>
      </main>

      <footer className={styles.footer}>
        <Link href="/" className={styles.footerLogo}>
          ENTHUSIASTS
        </Link>
        <div className={styles.footerCopyright}>© 2026 ENTHUSIASTS</div>
      </footer>
    </div>
  );
}
