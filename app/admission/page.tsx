export default function Admission() {
  return (
    <main style={{ maxWidth: "700px", margin: "auto" }}>
      <h1 style={{ marginBottom: "20px" }}>Admission Enquiry</h1>

      <form
        name="admission"
        method="POST"
        data-netlify="true"
        style={{
          backgroundColor: "#f8fafc",
          padding: "25px",
          borderRadius: "12px",
        }}
      >
        {/* Netlify hidden field */}
        <input type="hidden" name="form-name" value="admission" />

        <label>
          Student Name
          <input type="text" name="name" required style={input} />
        </label>

        <label>
          Class / Age
          <input type="text" name="class" required style={input} />
        </label>

        <label>
          Program Interested In
          <select name="program" required style={input}>
            <option value="">Select</option>
            <option value="Studies">Studies</option>
            <option value="Sports">Sports</option>
            <option value="Both">Both</option>
          </select>
        </label>

        <label>
          Sports (if any)
          <select name="sport" style={input}>
            <option value="">Select</option>
            <option value="Cricket">Cricket</option>
            <option value="Taekwondo">Taekwondo</option>
            <option value="Badminton">Badminton</option>
            <option value="Chess">Chess</option>
          </select>
        </label>

        <label>
          Phone Number
          <input type="tel" name="phone" required style={input} />
        </label>

        <button type="submit" style={button}>
          Submit Enquiry
        </button>
      </form>
    </main>
  );
}

const input = {
  display: "block",
  width: "100%",
  padding: "10px",
  margin: "8px 0 20px",
  borderRadius: "6px",
  border: "1px solid #cbd5e1",
};

const button = {
  backgroundColor: "#0f172a",
  color: "white",
  padding: "12px",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  width: "100%",
  fontSize: "16px",
};
