import { useState } from 'react';
import './App.css';

const App = () => {
  const [habits, setHabits] = useState([]);
  const [habitInput, setHabitInput] = useState('');

  const handleHabitChange = (e) => {
    setHabitInput(e.target.value);
  };

  const handleAddHabit = (e) => {
    e.preventDefault();

    if (habitInput.trim() === '') {
      return;
    }

    const newHabit = {
      id: crypto.randomUUID(),
      name: habitInput,
      completed: false,
    };

    setHabits((prevHabits) => {
      return [...prevHabits, newHabit];
    });

    setHabitInput('');
  };

  const handleToggleHabit = (id) => {
    setHabits((prevHabits) => {
      return prevHabits.map((habit) => {
        if (habit.id === id) {
          return {
            ...habit,
            completed: !habit.completed,
          };
        }

        return habit;
      });
    });
  };

  const handleDeleteHabit = (id) => {
    setHabits((prevHabits) => {
      return prevHabits.filter((habit) => {
        return habit.id !== id;
      });
    });
  };

  return (
    <main className="app">
      <section className="tracker-shell">
        <header className="tracker-header">
          <p className="eyebrow">Daily Progress</p>
          <h1>Habit Tracker</h1>
          <p className="tracker-intro">
            Build consistency by tracking the habits you want to complete today.
          </p>
        </header>

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

        <section className="habits-list">
          {habits.map((habit) => {
            return (
              <article
                className={`habit-card ${habit.completed ? 'completed' : ''}`}
                key={habit.id}
              >
                <p>{habit.name}</p>

                <div className="habit-actions">
                  <button
                    type="button"
                    onClick={() => handleToggleHabit(habit.id)}
                  >
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
          })}
        </section>
      </section>
    </main>
  );
};

export default App;
