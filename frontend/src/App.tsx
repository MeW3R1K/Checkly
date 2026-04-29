import { Activity, Bell, Database, LineChart } from "lucide-react";

const metrics = [
  { label: "Active checks", value: "0", icon: Activity },
  { label: "Avg latency", value: "-- ms", icon: LineChart },
  { label: "Alerts", value: "0", icon: Bell },
  { label: "Stored results", value: "0", icon: Database }
];

export function App() {
  return (
    <main className="shell">
      <aside className="sidebar">
        <div className="brand">Checkly</div>
        <nav>
          <a className="active" href="#dashboard">Dashboard</a>
          <a href="#checks">Checks</a>
          <a href="#alerts">Alerts</a>
          <a href="#reports">Reports</a>
        </nav>
      </aside>

      <section className="content">
        <header className="topbar">
          <div>
            <p className="eyebrow">API monitoring</p>
            <h1>Dashboard</h1>
          </div>
          <button type="button">Add check</button>
        </header>

        <section className="metricGrid" aria-label="Key monitoring metrics">
          {metrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <article className="metric" key={metric.label}>
                <Icon size={20} aria-hidden="true" />
                <span>{metric.label}</span>
                <strong>{metric.value}</strong>
              </article>
            );
          })}
        </section>

        <section className="panel">
          <div>
            <h2>No checks yet</h2>
            <p>Create the first API check after the backend CRUD endpoints are connected.</p>
          </div>
        </section>
      </section>
    </main>
  );
}
