"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import styles from "./Contact.module.css";

type Errors = Partial<Record<"name" | "email" | "message" | "agreed", string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const formRef = useRef<HTMLFormElement>(null);

  const validate = (): Errors => {
    const e: Errors = {};
    if (!name.trim()) e.name = "お名前をご入力ください。";
    if (!email.trim()) e.email = "メールアドレスをご入力ください。";
    else if (!EMAIL_RE.test(email.trim())) e.email = "メールアドレスの形式をご確認ください。";
    if (!message.trim()) e.message = "お問い合わせ内容をご入力ください。";
    if (!agreed) e.agreed = "プライバシーポリシーへの同意が必要です。";
    return e;
  };

  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) {
      setSent(false);
      // 最初の未入力欄へ静かに誘導する
      const first = formRef.current?.querySelector<HTMLElement>('[aria-invalid="true"], input:invalid');
      const target =
        formRef.current?.querySelector<HTMLElement>(
          errs.name ? "#contact-name" : errs.email ? "#contact-email" : errs.message ? "#contact-message" : "#contact-agree"
        ) ?? first;
      target?.focus();
      return;
    }
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

  const clearError = (key: keyof Errors) =>
    setErrors((prev) => {
      if (!(key in prev)) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });

  return (
    <section id="contact" className={styles.section} aria-labelledby="contact-heading">
      <div className={styles.inner}>
        <SectionHeading num="05" label="CONTACT" jp="お問い合わせ" style={{ marginBottom: "clamp(64px, 9vw, 110px)" }} />

        <div className={styles.grid}>
          <Reveal>
            <div className={styles.intro}>
              <h2 className={styles.title} id="contact-heading">
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
            <form ref={formRef} className={styles.form} onSubmit={handleSubmit} noValidate>
              <label className={styles.field} htmlFor="contact-name">
                <span className={styles.fieldLabel}>
                  お名前 <span className={styles.required} aria-hidden="true">*</span>
                </span>
                <input
                  id="contact-name"
                  type="text"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    clearError("name");
                  }}
                  required
                  aria-required="true"
                  aria-invalid={errors.name ? "true" : undefined}
                  aria-describedby={errors.name ? "error-name" : undefined}
                  placeholder="山田 太郎"
                  className={`${styles.input} ${errors.name ? styles.inputError : ""}`}
                />
                {errors.name && (
                  <span id="error-name" className={styles.errorText}>
                    {errors.name}
                  </span>
                )}
              </label>
              <label className={styles.field} htmlFor="contact-email">
                <span className={styles.fieldLabel}>
                  メールアドレス <span className={styles.required} aria-hidden="true">*</span>
                </span>
                <input
                  id="contact-email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    clearError("email");
                  }}
                  required
                  aria-required="true"
                  aria-invalid={errors.email ? "true" : undefined}
                  aria-describedby={errors.email ? "error-email" : undefined}
                  placeholder="you@example.com"
                  className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
                />
                {errors.email && (
                  <span id="error-email" className={styles.errorText}>
                    {errors.email}
                  </span>
                )}
              </label>
              <label className={styles.field} htmlFor="contact-company">
                <span className={styles.fieldLabel}>会社名・所属</span>
                <input
                  id="contact-company"
                  type="text"
                  autoComplete="organization"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="任意"
                  className={styles.input}
                />
              </label>
              <label className={styles.field} htmlFor="contact-message">
                <span className={styles.fieldLabel}>
                  お問い合わせ内容 <span className={styles.required} aria-hidden="true">*</span>
                </span>
                <textarea
                  id="contact-message"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    clearError("message");
                  }}
                  required
                  aria-required="true"
                  aria-invalid={errors.message ? "true" : undefined}
                  aria-describedby={errors.message ? "error-message" : undefined}
                  rows={5}
                  placeholder="ご相談内容をご記入ください。"
                  className={`${styles.textarea} ${errors.message ? styles.textareaError : ""}`}
                />
                {errors.message && (
                  <span id="error-message" className={styles.errorText}>
                    {errors.message}
                  </span>
                )}
              </label>
              <div className={styles.field}>
                <label className={styles.checkboxRow} htmlFor="contact-agree">
                  <input
                    id="contact-agree"
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => {
                      setAgreed(e.target.checked);
                      clearError("agreed");
                    }}
                    required
                    aria-required="true"
                    aria-invalid={errors.agreed ? "true" : undefined}
                    aria-describedby={errors.agreed ? "error-agreed" : undefined}
                    className={styles.checkbox}
                  />
                  <span className={styles.checkboxLabel}>
                    <Link href="/privacy-policy">プライバシーポリシー</Link>に同意のうえ送信します。
                  </span>
                </label>
                {errors.agreed && (
                  <span id="error-agreed" className={styles.errorText}>
                    {errors.agreed}
                  </span>
                )}
              </div>
              <div className={styles.submitRow}>
                <button type="submit" className={styles.submitBtn}>
                  送信する<span className={styles.submitArrow} aria-hidden="true">→</span>
                </button>
                <span role="status" aria-live="polite">
                  {sent && (
                    <span className={styles.sentMsg}>メールソフトを起動しました。送信を完了してください。</span>
                  )}
                </span>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
