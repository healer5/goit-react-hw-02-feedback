import { SectionTitle, Title1 } from './Section.styled';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <SectionTitle>
      {title && <Title1> {title} </Title1>}
      {children}
    </SectionTitle>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Section;
