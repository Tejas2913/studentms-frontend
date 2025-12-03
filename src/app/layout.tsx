import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Student Management System",
  description: "Static UI built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <Navbar />
        <main className="max-w-6xl mx-auto p-4">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
