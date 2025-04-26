import styles from './CountryList.module.css';
import Spinner from './Spinner.tsx';
import Message from './Message.tsx';
import CountryItem from './CountryItem.tsx';
import { useCities } from '../contexts/CitiesContext.tsx';

export interface CountryListProps {}

export default function CountryList({}: CountryListProps) {
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

  const countries = cities.reduce(
    (
      countryList,
      city
    ): { [key: string]: { emoji: string; country: string } } => {
      if (!countryList[city.country]) {
        countryList[city.country] = {
          emoji: city.emoji,
          country: city.country,
        };
      }

      return countryList;
    },
    {} as { [key: string]: { emoji: string; country: string } }
  );

  return (
    <ul className={styles.countryList}>
      {Object.values(countries).map((country) => (
        <CountryItem country={country} />
      ))}
    </ul>
  );
}
