import { ArtPage } from "../page";
import styles from './1.module.css'

export default function Page() {
  return <ArtPage stylesProp={`${styles.style1} ${styles.box}`} />;
}
