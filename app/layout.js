import { Inter } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import { shadesOfPurple } from "@clerk/themes";

export const metadata = {
  title: "SyncWave",
  description: " For syncing teams in the project flow.",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme:shadesOfPurple,
        variables: {
          colorPrimary: "#3b82f6",
          colorBackground: "#1a202c",
          colorInputBackground: "#2D3748",
          colorInputText: "#F3F4F6"
        },
        elements: {
          formButtonPrimary: "text-white",
          card: "bg-gray-800",
          headerSubtitle: "text-gray-400"
        }
      }}
    >
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
    </ClerkProvider>
  );
}
