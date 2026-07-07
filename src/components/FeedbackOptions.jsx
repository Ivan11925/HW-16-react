const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          onClick={() => onLeaveFeedback(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
