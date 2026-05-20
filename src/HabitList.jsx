import HabitCard from "./components/HabitCard.jsx";

const HabitList = ({filteredHabits, handleToggleHabit, handleDeleteHabit}) => {
  return (
    <section className="habits-list">
      {filteredHabits.length === 0 ? (
        <p className="empty-state">
          No habits yet. Add your first habit above.
        </p>
      ) : (
        filteredHabits.map((habit) => {
          return (
            <HabitCard
              key={habit.id}
              habit={habit}
              handleToggleHabit={handleToggleHabit}
              handleDeleteHabit={handleDeleteHabit}
            />
          );
        })
      )}
    </section>
  );
};

export default HabitList;
