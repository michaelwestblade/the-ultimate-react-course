import styles from './CityItem.module.css';
import { CityInterface, formatDate } from '../const.ts';
import { Link } from 'react-router-dom';
import { useCities } from '../contexts/CitiesContext.tsx';

export interface CityItemProps {
  city: CityInterface;
}

export default function CityItem({ city }: CityItemProps) {
  const { cityName, emoji, date, id, position } = city;
  const { currentCity, deleteCity } = useCities();

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    deleteCity(city);
  };

  return (
    <li>
      <Link
        className={`${styles.cityItem} ${currentCity && currentCity?.id == id ? styles['cityItem--active'] : ''}`}
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      >
        <span className={styles.emoji}>{emoji}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>{formatDate(date)}</time>
        <button className={styles.deleteBtn} onClick={handleDelete}>
          &times;
        </button>
      </Link>
    </li>
  );
}
