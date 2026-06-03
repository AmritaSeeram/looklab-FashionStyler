export const outfitTemplates = {
  interview: {
    top: "Structured blouse or fitted blazer",
    bottom: "Tailored trousers or midi skirt",
    shoes: "Closed-toe flats or low heels",
    accessories: "Minimal jewelry, clean bag, simple watch",
  },
  casual: {
    top: "Soft fitted tee or relaxed blouse",
    bottom: "High-waisted jeans or flowy pants",
    shoes: "Sneakers or comfortable sandals",
    accessories: "Layered necklace, tote bag, sunglasses",
  },
  formal: {
    top: "Elegant blouse or satin top",
    bottom: "Maxi skirt or tailored wide-leg pants",
    shoes: "Heels or polished flats",
    accessories: "Statement earrings and clutch",
  },
  party: {
    top: "Statement top or trendy corset-style blouse",
    bottom: "Mini skirt, leather pants, or wide-leg trousers",
    shoes: "Platform heels or bold boots",
    accessories: "Bold earrings, small handbag, layered rings",
  },
  school: {
    top: "Comfortable sweater, tee, or cardigan",
    bottom: "Jeans, cargo pants, or casual skirt",
    shoes: "Sneakers or flats",
    accessories: "Backpack, claw clip, simple jewelry",
  },
};

const amazonOutfits = {
  female: {
    interview: [
      {
        category: "Top",
        title: "Amazon Essentials Women's Stretch Blazer",
        url: "https://www.amazon.com/dp/B07WD8YZ2Q",
        image: "https://m.media-amazon.com/images/I/71lLgf1t-QL._AC_UX679_.jpg",
        price: 49,
      },
      {
        category: "Bottom",
        title: "Amazon Essentials Women's Straight-Leg Chino Pant",
        url: "https://www.amazon.com/dp/B0FN6WB7VP",
        image: "https://m.media-amazon.com/images/I/71dikT8wiRL._AC_UX679_.jpg",
        price: 36,
      },
      {
        category: "Shoes",
        title: "Clarks Women's Emslie Warren Loafers",
        url: "https://www.amazon.com/dp/B07KR878GJ",
        image: "https://m.media-amazon.com/images/I/41rgK0cHnTL._AC_UX679_.jpg",
        price: 65,
      },
    ],
    casual: [
      {
        category: "Top",
        title: "Amazon Essentials Women's Relaxed Fit T-Shirt",
        url: "https://www.amazon.com/dp/B0FW4L8BQC",
        image: "https://m.media-amazon.com/images/I/61y-Vj5Fz0L._AC_UX679_.jpg",
        price: 18,
      },
      {
        category: "Bottom",
        title: "Levi's Women's 501 Original Jeans",
        url: "https://www.amazon.com/dp/B0FFZ5PQZG",
        image: "https://m.media-amazon.com/images/I/71v3-cjcxkL._AC_UX679_.jpg",
        price: 50,
      },
      {
        category: "Shoes",
        title: "Adidas Women's Cloudfoam Pure Running Shoe",
        url: "https://www.amazon.com/dp/B0D48125X1",
        image: "https://m.media-amazon.com/images/I/71VmGQ7KJkL._AC_UX679_.jpg",
        price: 55,
      },
    ],
    formal: [
      {
        category: "Top",
        title: "Milumia Women's Satin V-Neck Blouse",
        url: "https://www.amazon.com/dp/B0DYC9KX52",
        image: "https://m.media-amazon.com/images/I/71f2-DLO5wL._AC_UX679_.jpg",
        price: 25,
      },
      {
        category: "Bottom",
        title: "Allegra K Women's High Waist Pencil Skirt",
        url: "https://www.amazon.com/dp/B0FSJWS94Z",
        image: "https://m.media-amazon.com/images/I/61WxZ4f9sVL._AC_UX679_.jpg",
        price: 28,
      },
      {
        category: "Shoes",
        title: "Clarks Women's Adriel Viola Pump",
        url: "https://www.amazon.com/dp/B0B321VXZF",
        image: "https://m.media-amazon.com/images/I/41pUfZWW4hL._AC_UX679_.jpg",
        price: 60,
      },
    ],
    party: [
      {
        category: "Top",
        title: "Leota Women's Midi Dress",
        url: "https://www.amazon.com/dp/B0DHWZCZ37",
        image: "https://m.media-amazon.com/images/I/81mgK3I+DlL._AC_UX679_.jpg",
        price: 72,
      },
      {
        category: "Shoes",
        title: "Nine West Women's Clair Heeled Sandal",
        url: "https://www.amazon.com/dp/B0GZJ2MFNZ",
        image: "https://m.media-amazon.com/images/I/71zojQ-5VnL._AC_UX679_.jpg",
        price: 46,
      },
      {
        category: "Accessories",
        title: "Kate Spade New York Straw Tote",
        url: "https://www.amazon.com/dp/B0G731RCQ1",
        image: "https://m.media-amazon.com/images/I/81GmLjYzr4L._AC_UX679_.jpg",
        price: 58,
      },
    ],
    school: [
      {
        category: "Top",
        title: "Amazon Essentials Women's Pullover Sweatshirt",
        url: "https://www.amazon.com/dp/B0FCY7DXGZ",
        image: "https://m.media-amazon.com/images/I/71wDnqvA9sL._AC_UX679_.jpg",
        price: 30,
      },
      {
        category: "Bottom",
        title: "Amazon Essentials Women's High-Rise Legging",
        url: "https://www.amazon.com/dp/B0D56K58Z4",
        image: "https://m.media-amazon.com/images/I/71asqZy2t4L._AC_UX679_.jpg",
        price: 22,
      },
      {
        category: "Shoes",
        title: "Skechers Women's Uno Stand on Air Sneaker",
        url: "https://www.amazon.com/dp/B0FJRVQFMX",
        image: "https://m.media-amazon.com/images/I/71VZs31kFeL._AC_UX679_.jpg",
        price: 45,
      },
    ],
  },
  male: {
    interview: [
      {
        category: "Top",
        title: "Amazon Essentials Men's Fitted Stretch Blazer",
        url: "https://www.amazon.com/dp/B07X12GCF9",
        image: "https://m.media-amazon.com/images/I/71Fl-ATXtkL._AC_UX679_.jpg",
        price: 59,
      },
      {
        category: "Bottom",
        title: "Amazon Essentials Men's Slim-Fit Chino Pant",
        url: "https://www.amazon.com/dp/B0DHD92CT7",
        image: "https://m.media-amazon.com/images/I/71T58CuU8WL._AC_UX679_.jpg",
        price: 42,
      },
      {
        category: "Shoes",
        title: "Clarks Men's Tilden Cap Oxford Shoe",
        url: "https://www.amazon.com/dp/B0B5P9PFTZ",
        image: "https://m.media-amazon.com/images/I/71LhkvK6s6L._AC_UX679_.jpg",
        price: 70,
      },
    ],
    casual: [
      {
        category: "Top",
        title: "Amazon Essentials Men's Slim-Fit T-Shirt",
        url: "https://www.amazon.com/dp/B08XTWF6DH",
        image: "https://m.media-amazon.com/images/I/71Fe-JDKkZL._AC_UX679_.jpg",
        price: 16,
      },
      {
        category: "Bottom",
        title: "Levi's Men's 511 Slim Fit Jeans",
        url: "https://www.amazon.com/dp/B08TBDCRXT",
        image: "https://m.media-amazon.com/images/I/81cOT6gz2sL._AC_UX679_.jpg",
        price: 45,
      },
      {
        category: "Shoes",
        title: "Adidas Men's Lite Racer Adapt Sneaker",
        url: "https://www.amazon.com/dp/B00RBA878O",
        image: "https://m.media-amazon.com/images/I/71y1eD4LSNL._AC_UX679_.jpg",
        price: 50,
      },
    ],
    formal: [
      {
        category: "Top",
        title: "Calvin Klein Men's Dress Shirt",
        url: "https://www.amazon.com/dp/B0BMTHJ3KG",
        image: "https://m.media-amazon.com/images/I/81oJxkn0xgL._AC_UX679_.jpg",
        price: 35,
      },
      {
        category: "Bottom",
        title: "Amazon Essentials Men's Slim-Fit Stretch Dress Pant",
        url: "https://www.amazon.com/dp/B07RMMHPRS",
        image: "https://m.media-amazon.com/images/I/71FJD-hxw0L._AC_UX679_.jpg",
        price: 38,
      },
      {
        category: "Shoes",
        title: "Cole Haan Men's Original Grand Wingtip Oxford",
        url: "https://www.amazon.com/dp/B06X97XB75",
        image: "https://m.media-amazon.com/images/I/71PB70P5JTL._AC_UX679_.jpg",
        price: 85,
      },
    ],
    party: [
      {
        category: "Top",
        title: "Rhone Men's Reign Long Sleeve Shirt",
        url: "https://www.amazon.com/dp/B0CTQYZTD2",
        image: "https://m.media-amazon.com/images/I/81hJtDyY42L._AC_UX679_.jpg",
        price: 89,
      },
      {
        category: "Bottom",
        title: "Amazon Essentials Men's Slim Chino Pant",
        url: "https://www.amazon.com/dp/B07BJL9YXY",
        image: "https://m.media-amazon.com/images/I/71-NPDlj2rL._AC_UX679_.jpg",
        price: 38,
      },
      {
        category: "Shoes",
        title: "Steve Madden Men's Newcastle Dress Shoe",
        url: "https://www.amazon.com/dp/B0BKL4V2FB",
        image: "https://m.media-amazon.com/images/I/71x8fjVOZjL._AC_UX679_.jpg",
        price: 59,
      },
    ],
    school: [
      {
        category: "Top",
        title: "Amazon Essentials Men's Pullover Hoodie",
        url: "https://www.amazon.com/dp/B095J5X3Q8",
        image: "https://m.media-amazon.com/images/I/81mZg52owRL._AC_UX679_.jpg",
        price: 32,
      },
      {
        category: "Bottom",
        title: "Amazon Essentials Men's 5-Pack Stretch Boxer Briefs",
        url: "https://www.amazon.com/dp/B0F96GXRCN",
        image: "https://m.media-amazon.com/images/I/71DjuOx9IbL._AC_UX679_.jpg",
        price: 18,
      },
      {
        category: "Shoes",
        title: "New Balance Men's 574 Core Sneaker",
        url: "https://www.amazon.com/dp/B0BKL32VLM",
        image: "https://m.media-amazon.com/images/I/71OF2xE1zRL._AC_UX679_.jpg",
        price: 75,
      },
    ],
  },
};

export function getAmazonProducts(gender, occasion, budget = 250) {
  const products = amazonOutfits[gender]?.[occasion] || amazonOutfits[gender]?.casual || [];

  // Normalize groups by role
  const normalized = { Top: [], Bottom: [], Shoes: [], Accessories: [] };
  products.forEach((p) => {
    const k = (p.category || "").toString().toLowerCase();
    if (k.includes("top")) normalized.Top.push(p);
    else if (k.includes("bottom")) normalized.Bottom.push(p);
    else if (k.includes("shoe")) normalized.Shoes.push(p);
    else normalized.Accessories.push(p);
  });

  // 1) Attempt to find a Top+Bottom pair that fits the budget (maximize spend)
  let bestPair = null;
  let bestPairTotal = 0;
  for (const t of normalized.Top) {
    for (const b of normalized.Bottom) {
      const total = (t.price || 0) + (b.price || 0);
      if (total <= budget && total > bestPairTotal) {
        bestPair = [t, b];
        bestPairTotal = total;
      }
    }
  }

  // If found, include Top+Bottom and then greedily add shoes/accessories if space remains
  if (bestPair) {
    const selected = [...bestPair];
    let running = bestPairTotal;

    const cheapest = (arr) => (arr && arr.length ? arr.reduce((a, b) => (a.price <= b.price ? a : b)) : null);

    const shoe = cheapest(normalized.Shoes);
    if (shoe && running + (shoe.price || 0) <= budget) {
      selected.push(shoe);
      running += shoe.price || 0;
    }

    const acc = cheapest(normalized.Accessories);
    if (acc && running + (acc.price || 0) <= budget) {
      selected.push(acc);
      running += acc.price || 0;
    }

    const order = ["Top", "Bottom", "Shoes", "Accessories"];
    return selected.sort((a, b) => order.indexOf(a.category) - order.indexOf(b.category));
  }

  // 2) If no pair fits, try any single Top or Bottom that fits (prefer most expensive that still fits)
  const candidates = [...normalized.Top, ...normalized.Bottom].filter((p) => (p.price || 0) <= budget);
  if (candidates.length > 0) {
    const bestSingle = candidates.reduce((a, b) => ((a.price || 0) > (b.price || 0) ? a : b));
    return [bestSingle];
  }

  // 3) Final fallback: any single product across all categories that fits (cheapest)
  const fallback = products.filter((p) => (p.price || 0) <= budget);
  if (fallback.length === 0) return [];
  const cheapestAll = fallback.reduce((a, b) => (a.price <= b.price ? a : b));
  return [cheapestAll];
}
