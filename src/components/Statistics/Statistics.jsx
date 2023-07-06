import css from './Statistics.module.css';
import data from './data.json';

export const Statistics = () => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>Upload stats</h2>

      <ul className={css[`stat-list`]}>
        {data.map(({ id, label, percentage }) => {
          return (
            <li className={css.item} key={id}>
              <span className={css.label}>{label}</span>
              <span className={css.percentage}>{percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
