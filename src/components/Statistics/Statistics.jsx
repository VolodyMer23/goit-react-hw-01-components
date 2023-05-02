import PropTypes from 'prop-types';
import { StatsList, StatsTitle } from './Statistics.styled';
import StatisticsItem from './StatisticsItem';
import {Section, SectionTitle} from '../Section/Section.styled';

const Statistics = ({ title, stats }) => {
  return (
    <Section>
      <SectionTitle>2 - Секція статистики</SectionTitle>
      <StatsTitle>{title}</StatsTitle>
      <StatsList>
        <StatisticsItem stats={stats} />
      </StatsList>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.array.isRequired,
};



export default Statistics;
