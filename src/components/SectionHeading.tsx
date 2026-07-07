import Reveal from "./Reveal";
import styles from "./SectionHeading.module.css";

type SectionHeadingProps = {
  num: string;
  label: string;
  jp: string;
  style?: React.CSSProperties;
};

export default function SectionHeading({ num, label, jp, style }: SectionHeadingProps) {
  return (
    <Reveal style={style}>
      <div className={styles.row}>
        <span className={styles.num}>{num}</span>
        <span className={styles.label}>{label}</span>
        <span className={styles.hairline} />
        <span className={styles.jp}>{jp}</span>
      </div>
    </Reveal>
  );
}
