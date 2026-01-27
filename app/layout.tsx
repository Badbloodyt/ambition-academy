export const metadata = {
  title: "Ambition Academy",
  description: "Coaching Institute Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif" }}>
        {/* Navigation Bar */}
        <nav
  style={{
    padding: "16px 40px",
    backgroundColor: "#0f172a",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  }}
>
  <div style={{ color: "white", fontSize: "20px", fontWeight: "bold" }}>
    Ambition Academy
  </div>

  <div style={{ display: "flex", gap: "20px" }}>
    <a href="/" style={navLink}>Home</a>
    <a href="/about" style={navLink}>About</a>
    <a href="/courses" style={navLink}>Programs</a>
    <a href="/contact" style={navLink}>Contact</a>
  </div>
</nav>

        {/* Page Content */}
        <div style={{ padding: "30px" }}>{children}</div>
      </body>
    </html>
  );
}
