import { useCities } from "../contexts/CitiesContext";
import styles from "./CountryItem.module.css";

function CountryItem({ country }) {
  const { getFlag } = useCities();

  console.log(country);

  return (
    <li className={styles.countryItem}>
      {/* Arrumar essa renderização depois */}
      <span>{getFlag(country.emoji || country.countryCode)}</span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
