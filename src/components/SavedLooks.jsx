export default function SavedLooks({ savedLooks }) {
  if (savedLooks.length === 0) return null;

  return (
    <section className="saved">
      <div className="section-label">
        <span className="tag">Saved Looks</span>
        <h2>Your favorite outfits</h2>
      </div>
      <div className="saved-grid">
        {savedLooks.map((look) => (
          <article key={look.id} className="mini-card">
            <h3>{look.title}</h3>
            <p>{look.colorPalette || "Neutral palette"}</p>
            <p>{look.confidence}% match</p>
          </article>
        ))}
      </div>
    </section>
  );
}
