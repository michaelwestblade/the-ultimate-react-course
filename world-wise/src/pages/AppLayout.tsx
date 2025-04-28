import SideBar from '../components/SideBar.tsx';
import styles from './AppLayout.module.css';
import Map from '../components/Map.tsx';
import User from '../components/User.tsx';

export default function AppLayout() {
  return (
    <div className={styles.app}>
      <SideBar />
      <Map />
      <User />
    </div>
  );
}
