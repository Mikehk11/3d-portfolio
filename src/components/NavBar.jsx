import { useState, useEffect } from "react";
import { navLinks } from "../constants";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleResumeClick = () => {
    const link = document.createElement("a");
    link.href = "/resume/Mike_Kanyatsi_Resume.pdf";
    link.download = "Mike_Kanyatsi_Resume.pdf";
    link.click();
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <a href="#hero" className="logo">
          Mike Kanyatsi
        </a>

        <nav className="desktop">
          <ul>
            {navLinks
              .filter(({ name }) => name !== "Testimonials")
              .map(({ link, name }) => (
                <li key={name} className="group">
                  <a href={link}>
                    <span>{name}</span>
                    <span className="underline" />
                  </a>
                </li>
              ))}
          </ul>
        </nav>

        <div className="flex gap-4">
          {/* Resume button */}
          <button onClick={handleResumeClick} className="contact-btn group">
            <div className="inner">
              <span>Resume</span>
            </div>
          </button>

          {/* Contact button */}
          <a href="#contact" className="contact-btn group">
            <div className="inner">
              <span>Contact me</span>
            </div>
          </a>
        </div>
      </div>
    </header>
  );
};

export default NavBar;