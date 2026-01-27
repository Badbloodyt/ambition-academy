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
    margin: "60px auto",
    padding: "0 20px",
  }}
>
  <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
    Our Sports Activities
  </h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: "20px",
    }}
  >
    <img
      src="https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d"
      style={imgStyle}
      alt="Cricket"
    />
    <img
      src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1"
      style={imgStyle}
      alt="Taekwondo"
    />
    <img
      src="https://images.unsplash.com/photo-1599058917212-d750089bc07e"
      style={imgStyle}
      alt="Badminton"
    />
    <img
      src="https://images.unsplash.com/photo-1581090700227-1e37b190418e"
      style={imgStyle}
      alt="Chess"
    />
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
const imgStyle = {
  width: "100%",
  height: "180px",
  objectFit: "cover",
  borderRadius: "10px",
};
