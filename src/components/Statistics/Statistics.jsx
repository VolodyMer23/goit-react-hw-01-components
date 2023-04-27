import PropTypes from 'prop-types';
import {} from './Statistics.styled';
import StatisticsItem from './StatisticsItem';

const Statistics = ({ title, stats }) => {
  return (
    <section class="statistics">
      <h2 class="title">{title}</h2>

      <ul class="stat-list">
        {stats.map(stat => (
          <li key={stat.id} class="item">
            <StatisticsItem label={stat.label} percentage={stat.percentage} />
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};

export default Statistics;
