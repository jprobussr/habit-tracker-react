import { useState, useEffect } from 'react';
import './App.css';
import HabitForm from './components/HabitForm.jsx';
import ProgressSection from './components/ProgressSection.jsx';
import FilterBar from './components/FilterBar.jsx';
import HabitCard from './components/HabitCard.jsx';
import HabitList from './HabitList.jsx';

const App = () => {
  const [habits, setHabits] = useState(() => {
    const savedHabits = localStorage.getItem('habits');

    if (!savedHabits) {
      return [];
    }

    return JSON.parse(savedHabits);
  });
  const [habitInput, setHabitInput] = useState('');
  const [filter, setFilter] = useState('all');

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

  const completedHabits = habits.filter((habit) => {
    return habit.completed;
  }).length;

  const totalHabits = habits.length;

  const filteredHabits = habits.filter((habit) => {
    if (filter === 'active') {
      return !habit.completed;
    }

    if (filter === 'completed') {
      return habit.completed;
    }

    return true;
  });

  useEffect(() => {
    localStorage.setItem('habits', JSON.stringify(habits));
  }, [habits]);

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

        <HabitForm
          habitInput={habitInput}
          setHabitInput={setHabitInput}
          handleAddHabit={handleAddHabit}
          handleHabitChange={handleHabitChange}
        />

        <ProgressSection
          completedHabits={completedHabits}
          totalHabits={totalHabits}
        />

        <FilterBar filter={filter} setFilter={setFilter} />

       <HabitList filteredHabits={filteredHabits} handleToggleHabit={handleToggleHabit} handleDeleteHabit={handleDeleteHabit} />
      </section>
    </main>
  );
};

export default App;
