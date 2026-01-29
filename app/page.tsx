"use client";

export default function Home() {
  return (
    <main className="page">
      {/* HERO */}
      <section className="hero">
        <div className="heroOverlay" />
        <div className="heroInner">
          <div className="badge">Studies • Sports • Growth</div>
          <h1 className="heroTitle">Ambition Academy</h1>
          <p className="heroSub">
            Where <b>Studies</b> and <b>Sports</b> grow together
          </p>

          <div className="heroActions">
            <a className="btn btnPrimary" href="#enquiry">
              Admission Enquiry
            </a>
            <a className="btn btnGhost" href="#sports">
              Explore Sports
            </a>
          </div>
        </div>
      </section>

      {/* ENQUIRY */}
      <section id="enquiry" className="section">
        <div className="card">
          <h2 className="sectionTitle">Admission Enquiry</h2>

          <form
            className="form"
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

              window.open(`https://wa.me/917355449247?text=${message}`, "_blank");
            }}
          >
            <input name="name" placeholder="Student Name" required className="input" />
            <input name="class" placeholder="Class / Age" required className="input" />

            <select name="program" required className="input">
              <option value="">Program Interested In</option>
              <option value="Studies">Studies</option>
              <option value="Sports">Sports</option>
              <option value="Both">Both</option>
            </select>

            <select name="sport" className="input">
              <option value="">Sport (if applicable)</option>
              <option value="Cricket">Cricket</option>
              <option value="Taekwondo">Taekwondo</option>
              <option value="Badminton">Badminton</option>
              <option value="Chess">Chess</option>
            </select>

            <input name="phone" placeholder="Phone Number" required className="input" />

            <button type="submit" className="btn btnPrimary btnFull">
              Send Enquiry on WhatsApp
            </button>
          </form>

          <p className="hint">
            Tip: You can later change the WhatsApp number in one place if you want.
          </p>
        </div>
      </section>

      {/* SPORTS */}
      <section id="sports" className="section">
        <h2 className="sectionTitle center">Our Sports Activities</h2>

        <div className="grid">
          <SportCard title="Cricket" img="/images/cricket.jpg" />
          <SportCard title="Taekwondo" img="/images/taekwondo.jpg" />
          <SportCard title="Badminton" img="/images/badminton.jpg" />
          <SportCard title="Chess" img="/images/chess.jpg" />
        </div>
      </section>
    </main>
  );
}

function SportCard({ title, img }: { title: string; img: string }) {
  return (
    <div className="sportCard">
      <div className="sportImg" style={{ backgroundImage: `url(${img})` }} />
      <div className="sportMeta">
        <div className="sportTitle">{title}</div>
        <div className="sportDesc">Training • Discipline • Confidence</div>
      </div>
    </div>
  );
}
