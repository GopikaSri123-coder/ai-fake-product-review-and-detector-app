import React, { useState, useEffect } from 'react';

const TipsList = () => {
  const [tips, setTips] = useState([]);

  useEffect(() => {
    setTips([
      "⭐ Over-exaggerated reviews may be fake.",
      "✍️ Too short reviews are suspicious.",
      "📦 Check if they describe real product usage.",
    ]);
  }, []);

  return (
    <div>
      <h2>How to Identify Fake Reviews</h2>
      <ul>
        {tips.map((tip, index) => (
          <li key={index}>{tip}</li>
        ))}
      </ul>
    </div>
  );
};

export default TipsList;
