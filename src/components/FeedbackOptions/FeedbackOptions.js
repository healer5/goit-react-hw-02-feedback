import PropTypes from 'prop-types';
// import { AiOutlineCoffee } from 'react-icons/ai';

import {
  FeedbackList,
  FeedbackItem,
  FeedbackButton,
} from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackList>
      {options.map(option => {
        return (
          <FeedbackItem key={option}>
            <FeedbackButton
              type="button"
              onClick={() => onLeaveFeedback(option)}
            >
              {/* <AiOutlineCoffee /> */}
              {option}
            </FeedbackButton>
          </FeedbackItem>
        );
      })}
    </FeedbackList>
  );
};

//   options.map(item => {
//     const id = nanoid();
//     return (
//       <Button key={id} type="button" onClick={onLeaveFeedback}>
//         {item}
//       </Button>
//     );
//   });
// };

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
