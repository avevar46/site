
import React, { useState } from "react";
import "./ReferenceLetter.css";
/* TODO: combine hitHighlighting w/ ReferencePreviewCard */
import { hitHighlightText } from "../../data/utils/hitHighlightText";
import { hitHighlights } from "../../data/references/references_data_hithighlight";


export default function ReferenceLetter({ category, author, role, paragraphs }) {
  const [expanded, setExpanded] = useState(true);

  const previewCount = 3;

  const visibleParagraphs = expanded 
    ? paragraphs 
    : paragraphs.slice(0, previewCount);

  return (
    <div className="reference-letter-wrapper">
        <div className="reference-letter">
            <h3>{category}</h3>
            {visibleParagraphs.map((para, i) => (
                <p className="letter-text">{hitHighlightText(para, hitHighlights)}</p>
            ))}

            <p className="author">{author}</p>
            <p className="role">{role}</p>

            {paragraphs.length > previewCount && (
                <button 
                className="toggle-btn" 
                onClick={() => setExpanded(!expanded)}
                >
                {expanded ? "Show Less" : "Read More"}
                </button>
            )}

        </div>
    </div>
  );
}

/*
                <p key={i} className="letter-text">{para}</p>
*/

/*import React, { useState } from "react";
import "./ReferenceLetter.css";

export default function ReferenceLetter({ author, role, text }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="reference-letter">
      <h3>{author}</h3>
      <p className="role">{role}</p>
      <p className="letter-text">
        {expanded ? text : text.split(" ").slice(0, 40).join(" ") + "..."}
      </p>
      <button 
        className="toggle-btn" 
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Show Less" : "Read More"}
      </button>
    </div>
  );
}*/