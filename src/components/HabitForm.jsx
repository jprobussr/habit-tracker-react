import React from 'react';

const HabitForm = ({handleAddHabit, habitInput, setHabitInput, handleHabitChange}) => {
  return (
    <form className="habit-form" onSubmit={handleAddHabit}>
      <input
        type="text"
        aria-label="Habit name"
        placeholder="Enter a habit..."
        value={habitInput}
        onChange={handleHabitChange}
      />

      <button type="submit">Add Habit</button>
    </form>
  );
};

export default HabitForm;
