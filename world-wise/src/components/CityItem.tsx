import styles from './CityItem.module.css';
import { CityInterface, formatDate } from '../const.ts';
import { Link } from 'react-router-dom';

export interface CityItemProps {
  city: CityInterface;
}

export default function CityItem({ city }: CityItemProps) {
  const { cityName, emoji, date, id } = city;
  return (
    <li>
      <Link className={styles.cityItem} to={`${id}`}>
        <span className={styles.emoji}>{emoji}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>{formatDate(date)}</time>
      </Link>
    </li>
  );
}
