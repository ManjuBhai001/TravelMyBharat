import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LayoutWrapper from "@/components/LayoutWrapper";

export const metadata = {
  title: "Travel My Bharat",
  description: "Travel the World!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar /> {/* ✅ Navbar on all pages */}
        <LayoutWrapper>{children}</LayoutWrapper> {/* ✅ Page Content */}
        <Footer /> {/* ✅ Footer on all pages */}
      </body>
    </html>
  );
}
