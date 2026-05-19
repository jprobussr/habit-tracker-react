import './App.css';

const App = () => {
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

        <form className="habit-form">
          <input
            type="text"
            aria-label="Habit name"
            placeholder="Enter a habit..."
          />

          <button type="submit">Add Habit</button>
        </form>
      </section>
    </main>
  );
};

export default App;
