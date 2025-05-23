import styles from './Sidebar.module.css';
import Logo from './Logo.tsx';
import AppNav from './AppNav.tsx';
import { Outlet } from 'react-router-dom';

export default function SideBar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <Outlet />

      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} by Worldwise Inc.
        </p>
      </footer>
    </div>
  );
}
