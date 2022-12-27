import styled from 'styled-components';

export const FeedbackList = styled.ul`
  text-align: center;
  background-color: #eee5dc;
  width: 480px;
  margin: 0 auto;
  list-style-type: none;
  padding: 0;
  padding-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const FeedbackItem = styled.li`
  margin: 15px 0;
`;

export const FeedbackButton = styled.button`
  display: inline-block;
  outline: none;
  cursor: pointer;
  font-size: 14px;
  line-height: 1;
  border-radius: 500px;
  transition-property: background-color, border-color, color, box-shadow, filter;
  transition-duration: 0.3s;
  border: 1px solid transparent;
  letter-spacing: 2px;
  min-width: 160px;
  text-transform: uppercase;
  white-space: normal;
  font-weight: 700;
  text-align: center;
  padding: 16px 14px 18px;
  color: #fff;
  background-color: #a78b80;
  height: 48px;
  :hover {
    background-color: #73372a;
  }
`;
// export const AiOutlineCoffee = styled.svg`
//   margin: 55px;
// `;
