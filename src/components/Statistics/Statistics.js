import PropTypes from 'prop-types';
import { StatisticsList } from './Statistics.styled';
import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiExpressionlessFill,
  BsFillEmojiAngryFill,
  BsFillHandThumbsUpFill,
  BsFillHddStackFill,
} from 'react-icons/bs';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatisticsList>
      <li>
        <BsFillEmojiHeartEyesFill /> Good: <span>{good}</span>
      </li>
      <li>
        <BsFillEmojiExpressionlessFill /> Neutral: <span>{neutral}</span>
      </li>
      <li>
        <BsFillEmojiAngryFill /> Bad: <span>{bad}</span>
      </li>
      <li>
        <BsFillHddStackFill /> Total: <span>{total}</span>
      </li>
      <li>
        <BsFillHandThumbsUpFill /> Positive feedback:{' '}
        <span>{positivePercentage}%</span>
      </li>
    </StatisticsList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
