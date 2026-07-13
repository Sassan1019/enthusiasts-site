"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import styles from "./Contact.module.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const to = "satokichi1019@gmail.com";
    const subject = "【ENTHUSIASTS】お問い合わせ" + (name ? "（" + name + "様）" : "");
    const bodyLines = [
      "お名前: " + name,
      "メールアドレス: " + email,
      "会社名・所属: " + (company || "―"),
      "",
      "お問い合わせ内容:",
      message,
    ];
    const href =
      "mailto:" + to + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(bodyLines.join("\n"));
    window.location.href = href;
    setSent(true);
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.inner}>
        <SectionHeading num="05" label="CONTACT" jp="お問い合わせ" style={{ marginBottom: "clamp(64px, 9vw, 110px)" }} />

        <div className={styles.grid}>
          <Reveal>
            <div className={styles.intro}>
              <h2 className={styles.title}>
                ご質問・ご相談などお気軽に
                <br />
                お問い合わせくださいませ。
              </h2>
              <p className={styles.lead}>
                プロジェクトへの参加、協業、取材のご相談など。お送りいただいた内容は担当者が確認のうえ、折り返しご連絡いたします。
              </p>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <label className={styles.field}>
                <span className={styles.fieldLabel}>
                  お名前 <span className={styles.required}>*</span>
                </span>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="山田 太郎"
                  className={styles.input}
                />
              </label>
              <label className={styles.field}>
                <span className={styles.fieldLabel}>
                  メールアドレス <span className={styles.required}>*</span>
                </span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="you@example.com"
                  className={styles.input}
                />
              </label>
              <label className={styles.field}>
                <span className={styles.fieldLabel}>会社名・所属</span>
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="任意"
                  className={styles.input}
                />
              </label>
              <label className={styles.field}>
                <span className={styles.fieldLabel}>
                  お問い合わせ内容 <span className={styles.required}>*</span>
                </span>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={5}
                  placeholder="ご相談内容をご記入ください。"
                  className={styles.textarea}
                />
              </label>
              <label className={styles.checkboxRow}>
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  required
                  className={styles.checkbox}
                />
                <span className={styles.checkboxLabel}>
                  <Link href="/privacy-policy">プライバシーポリシー</Link>に同意のうえ送信します。
                </span>
              </label>
              <div className={styles.submitRow}>
                <button type="submit" className={styles.submitBtn}>
                  送信する<span className={styles.submitArrow}>→</span>
                </button>
                {sent && (
                  <span className={styles.sentMsg}>メールソフトを起動しました。送信を完了してください。</span>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
