import React from "react";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const links = [
    { href: "#home", label: "Home" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur border-b">
      <nav className="max-w-6xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
        <a href="#home" className="text-xl font-bold">MyPortfolio</a>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">☰</button>
        <ul className="hidden md:flex gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-blue-600 transition">{l.label}</a>
            </li>
          ))}
        </ul>
      </nav>
      {open && (
        <div className="md:hidden border-t bg-white">
          <ul className="px-4 py-3 space-y-2">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="block py-1" onClick={() => setOpen(false)}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
