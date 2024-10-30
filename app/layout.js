import { Inter } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata = {
  title: "SyncWave",
  description: " For syncing teams in the project flow.",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Header/>
          <main className="min-h-screen">
            {children} 
          </main>
            <footer className="bg-gray-900 py-12">
              <div className="container mx-auto px-4 text-center text-gray-200">
                <p>All rights reserved. &copy; {new Date().getFullYear()}.</p>
              </div>
            </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
