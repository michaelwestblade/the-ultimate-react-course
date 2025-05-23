import { useSearchParams } from 'react-router-dom';

export function useUrlPosition() {
  const [searchParams] = useSearchParams();
  const lat = parseFloat(searchParams.get('lat') || '51.505');
  const lng = parseFloat(searchParams.get('lng') || '-0.09');

  return [lat, lng];
}
