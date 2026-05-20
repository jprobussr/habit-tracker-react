

const HabitCard = ({habit, handleToggleHabit, handleDeleteHabit}) => {
  return (
    <article
      className={`habit-card ${habit.completed ? 'completed' : ''}`}
      key={habit.id}
    >
      <p>{habit.name}</p>

      <div className="habit-actions">
        <button type="button" onClick={() => handleToggleHabit(habit.id)}>
          {habit.completed ? 'Completed' : 'Complete'}
        </button>
        <button
          type="button"
          className="delete-button"
          onClick={() => handleDeleteHabit(habit.id)}
        >
          Delete
        </button>
      </div>
    </article>
  );
};

export default HabitCard;
