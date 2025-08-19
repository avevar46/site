import React, { Fragment, useRef } from "react";
import ReferencePreviewCard from "../ReferencePreviewCard/ReferencePreviewCard";
import "./ReferencePreviewCarousel.css";

export default function ReferencePreviewCarousel({ items, onSelect }) {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const amount = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  return (
    <>
        <div className="carousel-tagline">
            Click on a card to read more.
        </div>
        <div className="carousel-wrapper">
            <button className="arrow-btn left" onClick={() => scroll("left")}>‹</button>

            <div className="carousel-scroll" ref={scrollRef}>
                {items.map((item, i) => (
                <div
                    key={i}
                    onClick={() => onSelect(item)} // call the handler when clicked
                    style={{ cursor: "pointer" }}
                >
                    <ReferencePreviewCard
                    category={item.category}
                    preview={item.preview}
                    author={item.author}
                    role={item.role}
                    paragraphs={item.paragraphs}
                    expansionState="collapsed"
                    />
                </div>
                ))}
            </div>

            <button className="arrow-btn right" onClick={() => scroll("right")}>›</button>
        </div>
    </>
  );
}
