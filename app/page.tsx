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
      <section
  style={{
    maxWidth: "700px",
    margin: "60px auto",
    padding: "25px",
    backgroundColor: "#f8fafc",
    borderRadius: "12px",
  }}
>
  <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
    Admission Enquiry
  </h2>

  <form
    onSubmit={(e) => {
      e.preventDefault();

      const form = e.target as HTMLFormElement;
      const data = new FormData(form);

      const message = `Admission Enquiry%0A
Name: ${data.get("name")}%0A
Class/Age: ${data.get("class")}%0A
Program: ${data.get("program")}%0A
Sport: ${data.get("sport")}%0A
Phone: ${data.get("phone")}`;

      window.open(
        `https://wa.me/917355449247?text=${message}`,
        "_blank"
      );
    }}
  >
    <input name="name" placeholder="Student Name" required style={input} />
    <input name="class" placeholder="Class / Age" required style={input} />

    <select name="program" required style={input}>
      <option value="">Program Interested In</option>
      <option value="Studies">Studies</option>
      <option value="Sports">Sports</option>
      <option value="Both">Both</option>
    </select>

    <select name="sport" style={input}>
      <option value="">Sport (if applicable)</option>
      <option value="Cricket">Cricket</option>
      <option value="Taekwondo">Taekwondo</option>
      <option value="Badminton">Badminton</option>
      <option value="Chess">Chess</option>
    </select>

    <input name="phone" placeholder="Phone Number" required style={input} />

    <button type="submit" style={button}>
      Send Enquiry on WhatsApp
    </button>
  </form>
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
import { CSSProperties } from "react";

const imgStyle: CSSProperties = {
  width: "100%",
  height: "180px",
  objectFit: "cover",
  borderRadius: "10px",
};
