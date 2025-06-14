// pages/about.js
import { useState, useEffect } from 'react';

export default function AboutPage() {
  const [fact, setFact] = useState('Loading...');

  useEffect(() => {
    // Sample logic: load fake product review fact
    const facts = [
      'Fake reviews are often overly positive with generic phrases.',
      'Many fake reviewers post multiple reviews in a short time.',
      'AI can help detect patterns in suspicious reviews.'
    ];
    const randomIndex = Math.floor(Math.random() * facts.length);
    setFact(facts[randomIndex]);
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>About This App</h1>
      <p>
        This app helps users identify AI-generated or fake product reviews using advanced analysis.
      </p>
      <h3>Did you know?</h3>
      <p>{fact}</p>
    </div>
  );
}
