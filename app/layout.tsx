import "../app/globals.css";
import Link from "next/link";

export const metadata = {
  title: "Brend Tech",
  description: "Innovative technology solutions for the future",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-800">
        
        <nav className="fixed top-0 left-0 w-full z-50 bg-blue-900/80 backdrop-blur-md text-white shadow-md transition-all duration-300">
          <div className="container mx-auto flex justify-between items-center px-8 py-5">
            <Link
              href="/"
              className="text-3xl font-extrabold tracking-wide text-white transition-transform duration-300 hover:scale-105"
            >
              BrendTech
            </Link>

            <div className="hidden md:flex items-center space-x-8 text-lg font-medium">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/team", label: "Team" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative group transition"
                >
                  {link.label}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-300 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </div>
          </div>
        </nav>
        <div className="h-24" />
        <main className="container mx-auto px-6 py-12">{children}</main>

        <footer className="bg-blue-900 text-white text-center py-8 mt-10 text-sm tracking-wide">
          © 2025 Brenda Anastasya (535240097). All rights reserved.
        </footer>
        
      </body>
    </html>
  );
}