// pages/index.js

import { useState, useEffect } from 'react';

export default function Home() {
  const [review, setReview] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  // fake API simulation
  const detectFakeReview = () => {
    setLoading(true);
    setTimeout(() => {
      if (review.toLowerCase().includes("great") || review.length < 20) {
        setResult("⚠️ This review may be AI-generated or fake.");
      } else {
        setResult("✅ This review seems genuine.");
      }
      setLoading(false);
    }, 1500);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>🕵️‍♀️ AI Fake Product Review Detector</h1>
      <p>Paste a product review below and click detect.</p>

      <textarea
        rows={5}
        cols={50}
        value={review}
        onChange={(e) => setReview(e.target.value)}
        placeholder="Enter your review here..."
        style={{ padding: "10px", fontSize: "16px" }}
      />

      <br />
      <button onClick={detectFakeReview} style={{ marginTop: "10px", padding: "10px 20px" }}>
        {loading ? "Detecting..." : "Detect Fake Review"}
      </button>

      <div style={{ marginTop: "20px", fontWeight: "bold" }}>{result}</div>
    </div>
  );
}
