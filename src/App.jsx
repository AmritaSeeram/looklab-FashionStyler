import { useState } from "react";
import "./styles.css";
import StyleQuiz from "./components/StyleQuiz";
import OutfitCard from "./components/OutfitCard";
import SavedLooks from "./components/SavedLooks";

export default function App() {
  const [outfit, setOutfit] = useState(null);
  const [savedLooks, setSavedLooks] = useState([]);

  const saveLook = () => {
    if (outfit && !savedLooks.some((look) => look.id === outfit.id)) {
      setSavedLooks([...savedLooks, outfit]);
    }
  };

  return (
    <div className="app">
      <header className="hero">
        <div className="hero-copy">
          <span className="tag">LookLab AI</span>
          <h1>Fashion styling made simple, personal, and beautiful.</h1>
          <p>
            Discover curated outfits and save your favorite looks with AI-powered styling that adapts to your mood, occasion, and comfort.
          </p>
        </div>

        <div className="hero-features">
          <div className="feature-pill">Style quiz for tailored looks</div>
          <div className="feature-pill">Smart weather-aware outfits</div>
          <div className="feature-pill">Save favorite ensembles</div>
        </div>
      </header>

      <div className="layout">
        <section className="card quiz-card">
          <StyleQuiz setOutfit={setOutfit} />
        </section>

        <section className="card preview-card">
          {outfit ? (
            <OutfitCard outfit={outfit} saveLook={saveLook} />
          ) : (
            <div className="empty-state">
              <h2>Ready to build your look</h2>
              <p>Choose your occasion, mood, and comfort preferences to generate an instant outfit idea.</p>
            </div>
          )}
        </section>
      </div>

      <SavedLooks savedLooks={savedLooks} />
    </div>
  );
}
