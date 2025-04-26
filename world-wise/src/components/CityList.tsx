import styles from './CityList.module.css';
import Spinner from './Spinner.tsx';
import CityItem from './CityItem.tsx';
import Message from './Message.tsx';
import { useCities } from '../contexts/CitiesContext.tsx';

export interface CityListProps {}

export default function CityList({}: CityListProps) {
  const { cities, loading, error } = useCities();
  if (loading) {
    return <Spinner />;
  }

  if (!cities.length) {
    return <Message message="Add your first city by clicking on the map" />;
  }

  if (error) {
    return (
      <Message message="There was a problem while trying to fetch cities" />
    );
  }

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem key={city.id} city={city} />
      ))}
    </ul>
  );
}
