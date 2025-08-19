import React, { useState } from "react";
import ReferencePreviewCarousel from "../components/ReferencePreviewCarousel/ReferencePreviewCarousel";
import ReferencePreviewCard from "../components/ReferencePreviewCard/ReferencePreviewCard";
import ReferenceLetter from "../components/ReferenceLetter/ReferenceLetter";
import referencesData from "../data/references/references_data.json";

export default function References() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [fade, setFade] = useState(false); // animation in the little bottom area

  const handleSelect = (item) => {
    if (selectedItem && selectedItem.author === item.author) return; // if same item clicked, just return
    const container = document.querySelector(".expanded-container");
    if (container) {
        const prevHeight = container.offsetHeight;
        container.style.height = `${prevHeight}px`;
    }
    setFade(true); // fades out
    setTimeout(() => {
        setSelectedItem(item); // switch item
        setFade(false); // fades in
        if (container) container.style.height = "auto"; // post transition, remove height
    }, 200);
  };

  const references = referencesData.references || [];
  const sortedReferences = [...references].sort((a, b) => a.order - b.order);

  // note 'expanded-container' is up in app.csss
  return (
    <div>
      <section id="Title" className="section-card-title">
            <h1>References</h1>
      </section>

      <ReferencePreviewCarousel
        items={sortedReferences}
        onSelect={handleSelect} // onclick
      />

      {selectedItem && (
        <div className={`expanded-container ${fade ? "fade" : ""}`}style={{ marginTop: "2rem" }}>
            {selectedItem && selectedItem.viewType === "Perspective" && (
                <ReferencePreviewCard
                    viewType={selectedItem.viewType}
                    category={selectedItem.category}
                    preview={selectedItem.preview}
                    author={selectedItem.author}
                    role={selectedItem.role}
                    paragraphs={selectedItem.paragraphs}
                    expansionState="expanded" // just for UI / view on card, not real state TODO: rename
                />
            )}

            {selectedItem && selectedItem.viewType !== "Perspective" && ( // TODO: need typing instead of value check
                <ReferenceLetter
                    category={selectedItem.category}
                    author={selectedItem.author}
                    role={selectedItem.role}
                    paragraphs={selectedItem.paragraphs}
                />
            )}
        </div>
      )}

    </div>
  );
}
