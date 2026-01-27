export default function Home() {
  return (
    <main>
      <h1 style={{ fontSize: "36px" }}>Ambition Academy</h1>

      <p style={{ fontSize: "18px", maxWidth: "800px" }}>
        Ambition Academy is a place where <b>Studies</b> and <b>Sports</b> grow
        together. We help students build strong academic fundamentals while also
        developing fitness, discipline, and confidence through sports training.
      </p>

      <section style={{ marginTop: "30px" }}>
        <h2>Studies</h2>
        <ul>
          <li>Class 6–10 (All Subjects)</li>
          <li>Class 11–12 (Commerce)</li>
          <li>Accountancy & Economics (Special Focus)</li>
          <li>Regular tests, doubt sessions & personal guidance</li>
        </ul>
      </section>

      <section style={{ marginTop: "30px" }}>
        <h2>Sports</h2>
        <ul>
          <li>Sports coaching & practice sessions</li>
          <li>Fitness & conditioning</li>
          <li>Skill development & match preparation</li>
          <li>Tournaments, discipline & teamwork focus</li>
        </ul>
      </section>

      <section style={{ marginTop: "30px" }}>
        <h2>Why Choose Ambition Academy?</h2>
        <ul>
          <li>Balanced focus on academics + sports</li>
          <li>Structured learning and training plans</li>
          <li>Positive environment and personal attention</li>
        </ul>
      </section>
    </main>
  );
}
