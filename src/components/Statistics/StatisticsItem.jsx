import PropTypes from 'prop-types';

const StatisticsItem = ({ label, percentage }) => {
    return (
        <span class="label"> {label} </span>
        <span class="percentage"> {percentage} </span>
    );
};

export default StatisticsItem