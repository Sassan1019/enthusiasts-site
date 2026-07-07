import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.inner}>
        <SectionHeading
          num="01"
          label="WHAT IS ENTHUSIASTS"
          jp="ENTHUSIASTSとは"
          style={{ marginBottom: "clamp(64px, 9vw, 120px)" }}
        />

        <Reveal>
          <h2 className={styles.statement}>
            挑戦できるかどうかは、
            <br />
            才能ではなく、
            <em>きっかけ</em>で決まってしまう。
          </h2>
        </Reveal>

        <div className={styles.bodyWrap}>
          <div className={styles.body}>
            <Reveal>
              <p className={styles.paragraph}>
                人生には、運の要素が大きすぎます。生まれた場所、出会った大人、教育環境、文化資本、資金、人脈、そして自分を信じてくれる人の存在。その多くは、自分の意志だけでは選べません。
              </p>
            </Reveal>
            <Reveal delay={1}>
              <p className={styles.paragraph}>
                ENTHUSIASTSは、この“きっかけの格差”によって埋もれてしまう才能を、仲間・戦略・ブランド・資本・コミュニティの力で社会へ実装するプロジェクトです。
              </p>
            </Reveal>
            <Reveal delay={2}>
              <p className={styles.paragraph}>
                人は、環境と仲間があれば変われる。私たちは人の可能性を信じ抜き、一人ひとりが自分の人生の主人公として生きられる社会の構築に挑んでいます。
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
