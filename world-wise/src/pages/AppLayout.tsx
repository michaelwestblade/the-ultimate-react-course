import SideBar from '../components/SideBar.tsx';
import styles from './AppLayout.module.css';

export default function AppLayout() {
  return (
    <div className={styles.app}>
      <SideBar />
    </div>
  );
}
