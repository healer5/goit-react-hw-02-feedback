import { GlobalStyle } from "./GlobalStyle";
import { Component } from "react";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import Section from "./Section/Section";
import Notification from "./Notification/Notification";

export class App extends Component{
  
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback() {
    const { good, bad, neutral } = this.state;
    const total = good + bad + neutral;
    return total;
  }

 countPositiveFeedbackPercentage = (good, totalFeedback) =>
    totalFeedback && Math.round((good / totalFeedback) * 100);
  
  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback([good, neutral, bad]);
    const positivePercentage = this.countPositiveFeedbackPercentage(
      good,
      total
    );
    return (
      
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.handleIncrement}></FeedbackOptions>
        </Section>

         <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ): (
            <Notification message="There is no feedback" />
          )}
        </Section>

        <GlobalStyle />
    </>

    );
  }
};
