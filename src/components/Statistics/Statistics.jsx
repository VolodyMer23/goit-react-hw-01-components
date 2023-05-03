import PropTypes from 'prop-types';
import { StatsList, StatsTitle } from './Statistics.styled';
import StatisticsItem from './StatisticsItem';
import { Section, SectionTitle } from '../Section/Section.styled';

const Statistics = ({ title, stats }) => {
  return (
    <Section>
      <SectionTitle>2 - Секція статистики</SectionTitle>
      <StatsTitle>{title}</StatsTitle>
      <StatsList>
        {stats.map(({ id, label, percentage }) => (
          <StatisticsItem id={id} label={label} percentage={percentage} />
        ))}
      </StatsList>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;
