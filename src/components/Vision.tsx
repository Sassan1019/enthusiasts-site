import Image from "next/image";
import Reveal from "./Reveal";
import Parallax from "./Parallax";
import SectionHeading from "./SectionHeading";
import { visions } from "@/data/content";
import styles from "./Vision.module.css";

export default function Vision() {
  return (
    <section id="vision" className={styles.section}>
      <div className={styles.inner}>
        <SectionHeading num="02" label="OUR VISION" jp="ビジョン" style={{ marginBottom: "clamp(28px, 4vw, 44px)" }} />
        <Reveal>
          <h2 className={styles.title}>Our Vision</h2>
        </Reveal>

        <div className={styles.list}>
          {visions.map((v) => (
            <Reveal key={v.num}>
              <div className={`${styles.block} ${v.dir === "rtl" ? styles.rtl : ""}`}>
                <div className={styles.inner2col}>
                  <div className={styles.text}>
                    <div className={styles.numRow}>
                      <span className={styles.num}>{v.num}</span>
                      <span className={styles.numLine} />
                    </div>
                    <h3 className={styles.blockTitle}>
                      {v.title}
                      {v.title2 && (
                        <>
                          <br />
                          {v.title2}
                        </>
                      )}
                    </h3>
                    <p className={styles.blockBody}>{v.body}</p>
                  </div>
                  <div className={styles.media}>
                    <Parallax speed={0.05}>
                      <div className={styles.frame}>
                        <Image
                          src={v.img}
                          alt={v.title}
                          width={800}
                          height={600}
                          className={styles.img}
                        />
                      </div>
                      <div className={styles.caption}>
                        <span className={styles.captionNum}>VISION {v.num}</span>
                        <span className={styles.captionEn}>{v.en}</span>
                      </div>
                    </Parallax>
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
