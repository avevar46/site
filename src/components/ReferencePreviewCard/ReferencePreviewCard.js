import React from "react";
import "./ReferencePreviewCard.css";
/* TODO: combine hitHighlighting w/ ReferenceLetter */
import { hitHighlightText } from "../../data/utils/hitHighlightText";
import { hitHighlights } from "../../data/references/references_data_hithighlight";

/* TODO: hmm instead of importing the highlights from separate data file as a const,
it should be coupled w/ the data and passed in as part of props.
otherwise they are too decoupled and can lose track of one another..
but no straightforward way to do this (at least not one that I like). 
will revisit on refactor. */

/* TODO: should fix this collapsed / expanded approach .. 
don't like toggling like this here. best I could do for now. */

export default function ReferencePreviewCard({ viewType, category, preview, author, role, paragraphs, expansionState = "collapsed"  }) {
  return (
    <>
        {expansionState==="collapsed" && (
            <div className={`reference-preview-card`}>
                <p className="category-label">{category}</p>
                <p className="preview-text">{preview}</p>
                <p className="author">{author}</p>
                <p className="role">{role}</p>
            </div>
        )}

        {expansionState==="expanded" && (
            <div className={`reference-preview-card ${expansionState === "expanded" ? "expanded" : ""}`}>
                <p className="category-label">{category}</p>

                {paragraphs && (
                    paragraphs.map((para, i) => (
                        <p className="letter-text">{hitHighlightText(para, hitHighlights)}</p>
                    ))
                )}

                <p className="author">{author}</p>
                <p className="role">{role}</p>
            </div>
        )}
    </>

  );
}

/*
                        <p key={i} className="letter-text">{hitHighlightText(para, hitHighlights)}</p>
*/

/*
${midSize  ? "mid-size" : ""}
*/
/*
    <div className={`reference-preview-card`}>
      <p className="category-label">{category}</p>

      {paragraphs && expansionState==="expanded" && (
        paragraphs.map((para, i) => (
            <p key={i} className="letter-text">{para}</p>
        ))
      )}

      {expansionState==="collapsed" && (
        <p className="preview-text">{preview}</p>
      )}
      <p className="author">{author}</p>
      <p className="role">{role}</p>
    </div>
*/