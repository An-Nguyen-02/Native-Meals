import camelize from 'camelize';
import { host, isMock } from '../../utils/env';
export const locationRequest = (searchTerm) => {
  return fetch(`${host}/geocode?city=${searchTerm}&mock=${isMock}`).then(
    (res) => res.json()
  );
};

export const locationTransform = (result) => {
  const formatResult = camelize(result);
  const { geometry = {} } = formatResult.results[0];
  const { lat, lng } = geometry.location;
  return { lat, lng, viewport: geometry.viewport };
};
