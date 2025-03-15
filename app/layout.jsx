// app/layout.js
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import "@/app/globals.css";
import { Toaster } from "@/components/ui/sonner";

export const metadata = {
  title: "Wilson's Bakery - Home of the Famous Fingernut Cookies™",
  description: "Serving Middle Georgia for over 60 years",
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased flex flex-col",
          fontSans.variable
        )}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Toaster
          position="bottom-right"
          closeButton
          theme="light"
          expand={true}
          visibleToasts={3}
          toastOptions={{
            style: {
              fontSize: "16px",
            },
          }}
        />
        <Footer />
      </body>
    </html>
  );
}
