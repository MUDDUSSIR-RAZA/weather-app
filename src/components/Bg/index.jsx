import video from "../../video/video.mp4";
import styles from "@/components/Bg/bg.module.css"

export default function ({children}) {
  return (
    <div className={styles.main}>
        <video className={styles.video} autoPlay loop muted src={video} />
        {children}
    </div>
  );
}
