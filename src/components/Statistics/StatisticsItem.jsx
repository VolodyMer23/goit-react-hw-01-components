import {
  StatsTypeItem,
  StatsFileExt,
  StatsUploadPercentage,
} from './StatisticsItem.styled';

const StatisticsItem = ({ id, label, percentage }) => {
  return (
    <StatsTypeItem key={id} type={label}>
      <StatsFileExt> {label} </StatsFileExt>
      <StatsUploadPercentage> {percentage}% </StatsUploadPercentage>
    </StatsTypeItem>
  );
};

export default StatisticsItem;
