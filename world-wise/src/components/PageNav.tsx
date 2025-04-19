import { Link } from 'react-router-dom';

export default function PageNav() {
  const links = [
    { path: '/', title: 'Home' },
    { path: '/product', title: 'Products' },
    { path: '/pricing', title: 'Pricing' },
  ];
  return (
    <nav>
      <ul>
        {links.map((link) => (
          <li key={link.path}>
            <Link to={link.path}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
