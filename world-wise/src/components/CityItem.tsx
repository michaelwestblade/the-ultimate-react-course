import styles from './CityItem.module.css';
import { CityInterface, formatDate } from '../const.ts';

export interface CityItemProps {
  city: CityInterface;
}

export default function CityItem({ city }: CityItemProps) {
  const { cityName, emoji, date } = city;
  return (
    <li className={styles.cityItem}>
      <span className={styles.emoji}>{emoji}</span>
      <h3 className={styles.name}>{cityName}</h3>
      <time className={styles.date}>{formatDate(date)}</time>
    </li>
  );
}
