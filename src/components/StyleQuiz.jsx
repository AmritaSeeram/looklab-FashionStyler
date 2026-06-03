import { outfitTemplates, getAmazonProducts } from "../data";

export default function StyleQuiz({ setOutfit }) {
  const generateOutfit = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const gender = form.get("gender");
    const occasion = form.get("occasion");
    const style = form.get("style");
    const weather = form.get("weather");
    const color = form.get("color");
    const comfort = form.get("comfort");
    const budget = Number(form.get("budget")) || 250;

    const match = outfitTemplates[occasion] || outfitTemplates.casual;
    const amazonProducts = getAmazonProducts(gender, occasion, budget);
    const productByCategory = amazonProducts.reduce((acc, product) => {
      acc[product.category.toLowerCase()] = product;
      return acc;
    }, {});

    const totalPrice = amazonProducts.reduce((sum, product) => sum + (product.price || 0), 0);
    const budgetFit = totalPrice > 0 && budget >= totalPrice;

    const outfit = {
      id: Date.now(),
      gender,
      title: `${style} ${occasion} look`,
      top: productByCategory.top?.title || match.top,
      bottom: productByCategory.bottom?.title || match.bottom,
      shoes: productByCategory.shoes?.title || match.shoes,
      accessories: productByCategory.accessories?.title || match.accessories,
      colorPalette: color,
      weather,
      comfort,
      budget,
      totalPrice,
      budgetFit,
      amazonProducts,
      reason: `This outfit balances ${style} styling with ${occasion} needs. The ${color} palette adds personality while keeping the look polished and wearable.`,
      aiTip: `For ${weather} weather, layer smartly and choose breathable or structured pieces based on comfort.`,
      confidence: Math.floor(Math.random() * 10) + 90,
    };

    setOutfit(outfit);
  };

  return (
    <form className="quiz" onSubmit={generateOutfit}>
      <div className="section-label">
        <span className="tag">Style Quiz</span>
        <h2>Build Your Look</h2>
      </div>

      <label htmlFor="gender">Styling for</label>
      <select id="gender" name="gender" defaultValue="female" required>
        <option value="female">Female</option>
        <option value="male">Male</option>
      </select>

      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" name="occasion" defaultValue="casual" required>
        <option value="interview">Interview</option>
        <option value="casual">Casual</option>
        <option value="formal">Formal</option>
        <option value="party">Party</option>
        <option value="school">School</option>
      </select>

      <label htmlFor="style">Style Goal</label>
      <select id="style" name="style" defaultValue="Elegant" required>
        <option value="Elegant">Elegant</option>
        <option value="Trendy">Trendy</option>
        <option value="Professional">Professional</option>
        <option value="Modest">Modest</option>
        <option value="Streetwear">Streetwear</option>
      </select>

      <label htmlFor="weather">Weather</label>
      <select id="weather" name="weather" defaultValue="Hot" required>
        <option value="Hot">Hot</option>
        <option value="Cold">Cold</option>
        <option value="Rainy">Rainy</option>
      </select>

      <label htmlFor="color">Favorite Color Palette</label>
      <input id="color" name="color" placeholder="Sunset tones, neutrals, bold jewel tones" />

      <label htmlFor="budget">Target Budget</label>
      <input id="budget" name="budget" type="number" min="20" defaultValue="250" required placeholder="Enter budget in USD" />

      <label htmlFor="comfort">Body Comfort Preference</label>
      <select id="comfort" name="comfort" defaultValue="Balanced" required>
        <option value="Balanced">Balanced</option>
        <option value="Cozy">Cozy</option>
        <option value="Structured">Structured</option>
        <option value="Breathable">Breathable</option>
      </select>

      <button type="submit">Generate AI Outfit</button>
    </form>
  );
}
