import React from "react";

export function hitHighlightText(text, highlights) {
  if (!highlights || highlights.length === 0) return text;

  // Build regex pattern for all highlight phrases
  const pattern = highlights
    .map(h => h.text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
    .join("|");

  const regex = new RegExp(`(${pattern})`, "gi");

  const parts = text.split(regex);

  return parts.map((part, idx) => {
    // Find all highlights that match this part (case-insensitive)
    const matchedHighlights = highlights.filter(
      h => part.toLowerCase() === h.text.toLowerCase()
    );

    if (matchedHighlights.length > 0) {
      // Merge classNames with spaces
      const className = matchedHighlights.map(h => h.className).join(" ");
      return (
        <span key={idx} className={className}>
          {part}
        </span>
      );
    }

    return part;
  });
}
