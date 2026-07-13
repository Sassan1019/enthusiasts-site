import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { members } from "@/data/content";
import styles from "./Members.module.css";

export default function Members() {
  return (
    <section id="member" className={styles.section}>
      <div className={styles.inner}>
        <SectionHeading num="04" label="PROJECT MEMBER" jp="推進メンバー" style={{ marginBottom: "clamp(28px, 4vw, 44px)" }} />
        <Reveal>
          <h2 className={styles.title}>Project Lead</h2>
        </Reveal>
        <Reveal>
          <p className={styles.subtitle}>プロジェクトリード</p>
        </Reveal>

        <div className={styles.container}>
          <div className={styles.grid}>
            {members.map((m) => (
              <Reveal key={m.nameEn}>
                <div className={styles.card}>
                  <div className={styles.photoFrame}>
                    <Image
                      src={m.img}
                      alt={`${m.nameJp}（${m.nameEn}）`}
                      width={640}
                      height={480}
                      sizes="(max-width: 620px) 88vw, (max-width: 1240px) 44vw, 550px"
                      className={styles.photo}
                    />
                  </div>
                  <div className={styles.nameRow}>
                    <span className={styles.nameEn}>{m.nameEn}</span>
                    <span className={styles.nameJp}>{m.nameJp}</span>
                  </div>
                  <div className={styles.role}>{m.role}</div>
                  <p className={styles.bio}>{m.bio}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
