import "../styles/home.scss";

export default function Home() {
  return (
    <main className="home">
      <section className="hero">
        <h1>Manage Your Business Smartly</h1>
        <p>
          Bazenga helps you manage stock, sales, expenses and employees with ease.
        </p>
        <button>Get Started</button>
      </section>

      <section className="features">
        <div className="card">Stock Management</div>
        <div className="card">Sales Tracking</div>
        <div className="card">Expense Control</div>
        <div className="card">Employee Management</div>
      </section>

      <section className="training">
        <h2>Training Videos</h2>
        <div className="videos">
          <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" />
          <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" />
        </div>
      </section>
    </main>
  );
}
