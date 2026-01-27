export default function Courses() {
  return (
    <main style={{ maxWidth: "900px", margin: "auto" }}>
      <h1 style={{ marginBottom: "20px" }}>Our Programs</h1>

      <div style={section}>
        <h2>Studies Program</h2>
        <ul>
          <li>Foundation (Class 6–8)</li>
          <li>Board Preparation (9–10)</li>
          <li>Commerce (11–12)</li>
        </ul>
      </div>

      <div style={section}>
        <h2>Sports Program</h2>
        <ul>
          <li>Cricket</li>
          <li>Taekwondo</li>
          <li>Badminton</li>
          <li>Chess</li>
        </ul>
      </div>
    </main>
  );
}

const section = {
  backgroundColor: "#f1f5f9",
  padding: "20px",
  borderRadius: "10px",
  marginBottom: "25px",
};
