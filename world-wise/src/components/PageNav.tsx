import { NavLink } from 'react-router-dom';
import styles from './PageNav.module.css';
import Logo from './Logo.tsx';

export default function PageNav() {
  const links = [
    { path: '/', title: 'Home' },
    { path: '/product', title: 'Products' },
    { path: '/pricing', title: 'Pricing' },
    { path: '/login', title: 'Log In' },
  ];
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
        {links.map((link) => (
          <li key={link.path}>
            <NavLink to={link.path}>{link.title}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
