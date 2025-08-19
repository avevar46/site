import React from "react";
import "./PerspectiveCard.css";

export default function PerspectiveCard({ author, text }) {
  return (
    <div className="perspective-card">
      <p className="perspective-text">“{text}”</p>
      <p className="perspective-author">— {author}</p>
    </div>
  );
}
