import { ReactNode } from "react";
import styles from "./HelpTip.module.css";

type HelpTipProps = {
  text: string;
  children: ReactNode;
};

export default function HelpTip({ text, children }: HelpTipProps): ReactNode {
  return (
    <div className={styles.helpTip}>
      {children}
      <div className={styles.helpIcon}>
        <p>?</p>
        <div className={styles.tooltip}>
          <span className={styles.tooltipText}>{text}</span>
        </div>
      </div>
    </div>
  );
}
