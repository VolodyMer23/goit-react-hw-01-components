import PropTypes from 'prop-types';
import {
  StatsTypeItem,
  StatsFileExt,
  StatsUploadPercentage,
} from './StatisticsItem.styled';

const StatisticsItem = ({stats}) => {
  return stats.map(({ id, label, percentage }) => (
    <StatsTypeItem key={id} type={label}>
      <StatsFileExt> {label} </StatsFileExt>
      <StatsUploadPercentage> {percentage}% </StatsUploadPercentage>
    </StatsTypeItem>
  ));
};

StatisticsItem.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  })),
};

export default StatisticsItem;
