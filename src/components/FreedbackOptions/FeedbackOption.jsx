import React from 'react';
import PropTypes from 'prop-types';

export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className="buttons">
      {options.map(item => {
        return (
          <button
            className="feedback_btn"
            key={item}
            name={item}
            onClick={onLeaveFeedback}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};
