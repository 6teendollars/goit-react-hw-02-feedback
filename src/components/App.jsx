import React, { Component } from 'react';
import { FeedbackOption } from './FreedbackOptions/FeedbackOption';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, item) => acc + item, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    if (!total) {
      return 0;
    }

    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  onLeaveFeedback = evt => {
    this.setState(prevState => ({
      [evt.target.name]: prevState[evt.target.name] + 1,
    }));
  };

  render() {
    const { good, neutural, bad } = this.state;
    return (
      <div>
        <Section title="Please, leave feedback">
          <FeedbackOption
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {!total ? }
          <Statistics
            good={good}
            neutral={neutural}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </div>
    );
  }
}
