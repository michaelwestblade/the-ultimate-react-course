// "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0"
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useEffect, useState } from 'react';

import styles from './Form.module.css';
import Button from './Button.tsx';
import { useNavigate } from 'react-router-dom';
import { useUrlPosition } from '../hooks/useUrlPosition.ts';
import { CityInterface, ReverseGeoccodeResponse } from '../const.ts';

export function convertToEmoji(countryCode: string) {
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map((char) => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
}

function Form() {
  const [cityName, setCityName] = useState('');
  const [country, setCountry] = useState('');
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState('');
  const [isLoadingGeocoding, setIsLoadingGeocoding] = useState(false);
  const [lat, lng] = useUrlPosition();
  const [emoji, setEmoji] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchCityData() {
      try {
        setIsLoadingGeocoding(true);
        const response = await fetch(
          `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
        );
        const data: ReverseGeoccodeResponse = await response.json();
        setCityName(data.city || data.locality || '');
        setCountry(data.countryName);
        setEmoji(convertToEmoji(data.countryCode));
        console.log(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoadingGeocoding(false);
      }
    }

    fetchCityData();
  }, [lat, lng]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newCity: CityInterface = {
      cityName,
      emoji,
      notes,
      country,
      date: date.toDateString(),
      position: { lat, lng },
    };
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.row}>
        <label htmlFor="cityName">City name</label>
        <input
          id="cityName"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
        />
        {<span className={styles.flag}>{emoji}</span>}
      </div>

      <div className={styles.row}>
        <label htmlFor="date">When did you go to {cityName}?</label>
        <DatePicker
          selected={date}
          onChange={(date) => {
            date ? setDate(date) : null;
          }}
        />
      </div>

      <div className={styles.row}>
        <label htmlFor="notes">Notes about your trip to {cityName}</label>
        <textarea
          id="notes"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        />
      </div>

      <div className={styles.buttons}>
        <Button
          type="primary"
          onClick={(e) => {
            e.preventDefault();
            navigate(-1);
          }}
        >
          Add
        </Button>
        <Button type="back">&larr; Back</Button>
      </div>
    </form>
  );
}

export default Form;
