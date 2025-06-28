import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "SEA Catering - Healthy Meals, Anytime, Anywhere",
  description: "Customizable healthy meal service with delivery across Indonesia.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      </head>
      <body className={`${poppins.className} bg-gray-50`} suppressHydrationWarning={true}>
        <div className="homepage-background">
            <main className="flex-grow h-full w-full rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10">{children}</main>
        </div>
      </body>
    </html>
  );
}
