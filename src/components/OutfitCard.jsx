export default function OutfitCard({ outfit, saveLook }) {
  const getPaletteColors = (palette) => {
    const value = (palette || "").toLowerCase();
    if (value.includes("sunset")) {
      return ["#ffb87e", "#ff9d79", "#f5d4c0", "#fed7b3"];
    }
    if (value.includes("neutral")) {
      return ["#e7e2ff", "#d4c6f5", "#c3b0df", "#a38bb1"];
    }
    if (value.includes("bold")) {
      return ["#f56c9a", "#7f5cff", "#1fb6ff", "#ffb433"];
    }
    if (value.includes("jewel")) {
      return ["#8b5cff", "#ff65a3", "#35d0ba", "#f6c15f"];
    }
    return ["#d8c6ff", "#ffd8e5", "#c9f1ff", "#ffe9c8"];
  };

  const paletteColors = getPaletteColors(outfit.colorPalette);

  return (
    <div className="outfit-card">
      <div className="outfit-header">
        <div>
          <span className="tag">Generated Look</span>
          <h2>{outfit.title}</h2>
        </div>
        <div className="score">{outfit.confidence}% match</div>
      </div>

      <div className="visual-reference">
        <div className="avatar-panel">
          <div className="avatar-visual">
            <div className={`avatar-figure ${outfit.gender}`}>
              <div className="stick-head" />
              <div className="stick-neck" />
              <div className="stick-torso" />
              <div className="stick-arm stick-arm-left" />
              <div className="stick-arm stick-arm-right" />
              <div className="stick-leg stick-leg-left" />
              <div className="stick-leg stick-leg-right" />
              <div className="stick-foot stick-foot-left" />
              <div className="stick-foot stick-foot-right" />
            </div>
          </div>
          <div className="avatar-copy">
            <div className="visual-card-title">Avatar preview</div>
            <p className="visual-copy">Your Amazon look is shown with real item thumbnails so you can preview the outfit instantly.</p>
            <div className="avatar-items">
              <div><strong>Top:</strong> {outfit.top}</div>
              <div><strong>Bottom:</strong> {outfit.bottom}</div>
              <div><strong>Shoes:</strong> {outfit.shoes}</div>
              <div><strong>Accessories:</strong> {outfit.accessories}</div>
            </div>
            <div className="price-summary">
              <div className="price-label">Estimated total</div>
              <div className="price-value">${outfit.totalPrice.toFixed(0)}</div>
              <div className={`price-status ${outfit.budgetFit ? "good" : "over"}`}>
                {outfit.budgetFit
                  ? `Within your $${outfit.budget} budget`
                  : `Over budget by $${Math.max(0, outfit.totalPrice - outfit.budget).toFixed(0)}`}
              </div>
            </div>
          </div>
        </div>

        <div className="visual-summary">
          <div className="visual-card-title">Color palette</div>
          <p className="visual-copy">A soft, expressive palette that supports your outfit direction.</p>
          <div className="palette-row">
            {paletteColors.map((color) => (
              <span key={color} className="palette-chip" style={{ background: color }} />
            ))}
          </div>
          <div className="palette-label">Palette: {outfit.colorPalette || "Soft neutrals"}</div>
        </div>
      </div>

      <div className="items">
        <div>Top: {outfit.top}</div>
        <div>Bottom: {outfit.bottom}</div>
        <div>Shoes: {outfit.shoes}</div>
        <div>Accessories: {outfit.accessories}</div>
        <div>Weather: {outfit.weather}</div>
        <div>Comfort: {outfit.comfort}</div>
      </div>

      {outfit.amazonProducts?.length > 0 && (
        <div className="amazon-list">
          <div className="section-label">
            <span className="tag">Amazon pieces</span>
            <h3>Shop this look</h3>
          </div>
          <div className="amazon-grid">
            {outfit.amazonProducts.map((product) => (
              <a key={product.title} href={product.url} target="_blank" rel="noreferrer" className="amazon-card">
                <img src={product.image} alt={product.title} />
                <div className="amazon-meta">
                  <span className="amazon-category">{product.category}</span>
                  <p>{product.title}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}

      <div className="insight">
        <h3>Why it works</h3>
        <p>{outfit.reason}</p>
      </div>

      <div className="insight">
        <h3>AI Styling Tip</h3>
        <p>{outfit.aiTip}</p>
      </div>

      <button className="save-button" onClick={saveLook}>
        Save Look
      </button>
    </div>
  );
}
