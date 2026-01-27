export default function Home() {
  return (
    <main>
      <h1 style={{ fontSize: "36px" }}>Ambition Academy</h1>

      <p style={{ fontSize: "18px", maxWidth: "700px" }}>
        Ambition Academy is a coaching institute committed to building strong
        academic foundations and helping students achieve excellence.
      </p>

      <section style={{ marginTop: "30px" }}>
        <h2>Courses Offered</h2>
        <ul>
          <li>Class 6–10 (All Subjects)</li>
          <li>Class 11–12 (Commerce)</li>
          <li>Accountancy & Economics</li>
        </ul>
      </section>

      <section style={{ marginTop: "30px" }}>
        <h2>Why Choose Us</h2>
        <ul>
          <li>Experienced teachers</li>
          <li>Concept-based teaching</li>
          <li>Regular tests & doubt sessions</li>
          <li>Personal attention</li>
        </ul>
      </section>
    </main>
  );
}
