import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { projects } from "@/data/content";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.inner}>
        <SectionHeading num="03" label="PROJECTS" jp="実装アプローチ" style={{ marginBottom: "clamp(28px, 4vw, 44px)" }} />
        <Reveal>
          <h2 className={styles.title}>Projects</h2>
        </Reveal>

        <div className={styles.list}>
          {projects.map((p) => (
            <Reveal key={p.num}>
              <div className={styles.block}>
                <div className={styles.meta}>
                  <span className={styles.metaNum}>PROJECT {p.num}</span>
                  <span className={styles.metaLabel}>{p.label}</span>
                </div>
                <div className={styles.inner2col}>
                  <div className={styles.logoCol}>
                    <div className={styles.logoPlate}>
                      <Image
                        src={p.logo}
                        alt={p.name}
                        width={400}
                        height={250}
                        className={styles.logoImg}
                      />
                    </div>
                    <div className={styles.nameRow}>
                      <span className={styles.name}>{p.name}</span>
                      <span className={styles.jpName}>{p.jp}</span>
                    </div>
                  </div>
                  <div className={styles.philosophyCol}>
                    <div className={styles.philosophyLabel}>PHILOSOPHY — 理念</div>
                    <h3 className={styles.concept}>{p.concept}</h3>
                    <div className={styles.body}>
                      {p.body.map((para, i) => (
                        <p key={i}>{para}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
