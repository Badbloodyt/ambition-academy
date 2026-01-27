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
            padding: "15px 30px",
            backgroundColor: "#1e293b",
            color: "white",
            display: "flex",
            gap: "20px",
          }}
        >
          <a href="/" style={{ color: "white", textDecoration: "none" }}>
            Home
          </a>
          <a href="/about" style={{ color: "white", textDecoration: "none" }}>
            About
          </a>
          <a href="/courses" style={{ color: "white", textDecoration: "none" }}>
            Courses
          </a>
          <a href="/contact" style={{ color: "white", textDecoration: "none" }}>
            Contact
          </a>
        </nav>

        {/* Page Content */}
        <div style={{ padding: "30px" }}>{children}</div>
      </body>
    </html>
  );
}
