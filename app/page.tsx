export default function Home() {
  return (
    <main style={{ maxWidth: "1100px", margin: "auto" }}>
      {/* Hero Section */}
      <section style={{ marginBottom: "50px" }}>
        <h1 style={{ fontSize: "40px", marginBottom: "10px" }}>
          Ambition Academy
        </h1>
        <p style={{ fontSize: "18px", color: "#334155", maxWidth: "850px" }}>
          A place where <b>Studies</b> and <b>Sports</b> grow together. We build
          strong academic foundations along with fitness, discipline, and
          confidence.
        </p>
      </section>

      {/* Cards Section */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "25px",
        }}
      >
        <div style={card}>
          <h2>📚 Studies</h2>
          <ul>
            <li>Class 6–10 (All Subjects)</li>
            <li>Class 11–12 (Commerce)</li>
            <li>Accountancy & Economics</li>
          </ul>
        </div>

        <div style={card}>
          <h2>🏆 Sports</h2>
          <ul>
            <li>Cricket</li>
            <li>Taekwondo</li>
            <li>Badminton</li>
            <li>Chess</li>
          </ul>
        </div>

        <div style={card}>
          <h2>⭐ Why Choose Us</h2>
          <ul>
            <li>Balanced academics + sports</li>
            <li>Experienced teachers & coaches</li>
            <li>Personal attention</li>
          </ul>
        </div>
      </section>
    </main>
  );
}

const card = {
  backgroundColor: "#f8fafc",
  padding: "25px",
  borderRadius: "12px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
};
