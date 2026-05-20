

const ProgressSection = ({completedHabits, totalHabits}) => {
  return (
    <section className="progress-section">
      <p>
        Completed{' '}
        <span>
          {completedHabits} / {totalHabits}
        </span>{' '}
        habits
      </p>
    </section>
  );
};

export default ProgressSection;
