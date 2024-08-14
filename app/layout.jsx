// app/layout.js
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/app/globals.css";

export const metadata = {
  title: "Wilson's Bakery - Home of the Famous Fingernut Cookies™",
  description: "Serving Middle Georgia for over 60 years",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
