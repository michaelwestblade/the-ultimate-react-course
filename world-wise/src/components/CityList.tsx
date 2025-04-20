import styles from './CityList.module.css';
import { CityInterface } from '../const.ts';
import Spinner from './Spinner.tsx';
import CityItem from './CityItem.tsx';
import Message from './Message.tsx';

export interface CityListProps {
  cities: CityInterface[];
  loading: boolean;
  error: boolean;
}

export default function CityList({ cities, loading, error }: CityListProps) {
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
