import "./globals.css";

export const metadata = {
  title: "Next.js Auth Example",
  description: "User Login and Registration Example",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
