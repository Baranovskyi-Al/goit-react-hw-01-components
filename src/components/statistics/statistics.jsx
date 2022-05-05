import styles from './statistics.module.css';
import { getRandomHexColor } from 'helpers/getRandonColor';
import PropTypes from 'prop-types';

const Statistics = ({ title, data }) => {
  return (
    <section className={styles.statistic}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.statlist}>
        {data.map(({ id, label, percentage }) => (
          <li
            key={id}
            style={{
              backgroundColor: getRandomHexColor(),
            }}
            className={styles.item}
          >
            <span className={styles.label}>{label}</span>
            <span className="percentage">{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;
