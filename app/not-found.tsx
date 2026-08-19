export default function NotFound() {
  return (
    <main className="not-found-page">
      <div className="ambient ambient-one" aria-hidden="true" />
      <section className="not-found-card glass-card">
        <span className="section-kicker">Error / 404</span>
        <h1>Page<br /><span>not found</span></h1>
        <p>The page has moved, disappeared or never existed.</p>
        <a className="button button-primary" href="/">Back home <span aria-hidden="true">↖</span></a>
      </section>
    </main>
  );
}
