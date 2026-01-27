export default function Home() {
  return (
    <main>
      {/* HERO BANNER */}
      <section
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1521412644187-c49fa049e84d)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          padding: "80px 30px",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "48px", marginBottom: "10px" }}>
          Ambition Academy
        </h1>
        <p style={{ fontSize: "20px", maxWidth: "800px", margin: "auto" }}>
          Where <b>Studies</b> and <b>Sports</b> grow together
        </p>
      </section>

      {/* CONTENT */}
      <section
        style={{
          maxWidth: "1100px",
          margin: "40px auto",
          padding: "0 20px",
        }}
      >
        <div
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
            <h2>🏏 Sports</h2>
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
              <li>Balanced focus on academics & sports</li>
              <li>Experienced teachers and coaches</li>
              <li>Personal attention to every student</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

const card = {
  backgroundColor: "#ffffff",
  padding: "25px",
  borderRadius: "12px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
};
