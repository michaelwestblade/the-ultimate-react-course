import styles from './CityList.module.css';
import { CityInterface } from '../const.ts';
import Spinner from './Spinner.tsx';
import CityItem from './CityItem.tsx';

export interface CityListProps {
  cities: CityInterface[];
  loading: boolean;
  error: boolean;
}

export default function CityList({ cities, loading }: CityListProps) {
  if (loading) {
    return <Spinner />;
  }

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem key={city.id} city={city} />
      ))}
    </ul>
  );
}
