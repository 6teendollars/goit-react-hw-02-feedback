import React from 'react';

export function FeedbackOption({ options, onLeaveFeedback }) {
  return (
    <div>
      {options.map(item => {
        return (
          <button key={item} name={item} onClick={onLeaveFeedback}>
            {item}
          </button>
        );
      })}
    </div>
  );
}
