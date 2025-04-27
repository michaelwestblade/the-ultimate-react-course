import styles from './City.module.css';
import BackButton from './BackButton.tsx';
import { useParams } from 'react-router-dom';
import { useCities } from '../contexts/CitiesContext.tsx';
import { useEffect } from 'react';
import Spinner from './Spinner.tsx';

const formatDate = (date?: string) =>
  new Intl.DateTimeFormat('en', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    weekday: 'long',
  }).format(new Date(date || ''));

function City() {
  const { id } = useParams();
  const { getCity, currentCity, loading } = useCities();

  useEffect(() => {
    getCity(id || '');
  }, [id]);

  const { cityName, emoji, date, notes } = currentCity || {};

  if (loading) return <Spinner />;

  return (
    cityName &&
    date && (
      <div className={styles.city}>
        <div className={styles.row}>
          <h6>City name</h6>
          <h3>
            <span>{emoji}</span> {cityName}
          </h3>
        </div>

        <div className={styles.row}>
          <h6>You went to {cityName} on</h6>
          <p>{formatDate(date || undefined)}</p>
        </div>

        {notes && (
          <div className={styles.row}>
            <h6>Your notes</h6>
            <p>{notes}</p>
          </div>
        )}

        <div className={styles.row}>
          <h6>Learn more</h6>
          <a
            href={`https://en.wikipedia.org/wiki/${cityName}`}
            target="_blank"
            rel="noreferrer"
          >
            Check out {cityName} on Wikipedia &rarr;
          </a>
        </div>

        <div>
          <BackButton />
        </div>
      </div>
    )
  );
}

export default City;
