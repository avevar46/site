import { useState, useEffect } from "react";
import "./ScrollToTopButton.css";

function ScrollToTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1000) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`scroll-to-top-wrapper ${show ? "show" : ""}`}>
      <span className="scroll-label">Scroll to Top</span>
      <button
        className="scroll-to-top"
        onClick={() =>
          window.scrollTo({ top: 0, behavior: "smooth" })
        }
      >
        ↑
      </button>
    </div>
  );
}

export default ScrollToTopButton;
