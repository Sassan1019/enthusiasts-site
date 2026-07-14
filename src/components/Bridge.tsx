import Reveal from "./Reveal";
import styles from "./Bridge.module.css";

/**
 * A quiet beat between MEMBER and CONTACT — the page pauses on the
 * brand's one-line definition before offering a way to get in touch.
 */
export default function Bridge() {
  return (
    <section className={styles.bridge}>
      <Reveal>
        <h2 className={`${styles.statement} jp-phrase`}>才能を、孤独にしない。</h2>
      </Reveal>
      <Reveal delay={2}>
        <p className={styles.sub}>ENTHUSIASTSは、あなたの可能性を信じるところから始めます。</p>
      </Reveal>
    </section>
  );
}
