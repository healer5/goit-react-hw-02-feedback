import css from './Notification.styled';
import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  return <css.Notification>{message}</css.Notification>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
