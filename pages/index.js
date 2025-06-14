// pages/index.js
import { useState } from 'react';

export default function Home() {
  const [review, setReview] = useState('');
  const [result, setResult] = useState(null);

  const handleCheckReview = () => {
    // Simple mock logic (you can later connect to API)
    const lowerReview = review.toLowerCase();
    if (lowerReview.includes('amazing') || lowerReview.includes('life-changing') || lowerReview.length < 30) {
      setResult('⚠️ This review might be fake or AI-generated.');
    } else {
      setResult('✅ This review looks genuine.');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>AI Fake Product Review Detector</h1>
      <p>Paste any product review below to check if it's genuine or potentially fake.</p>

      <textarea
        placeholder="Enter your product review here..."
        value={review}
        onChange={(e) => setReview(e.target.value)}
        rows={5}
        style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
      />

      <br />
      <button onClick={handleCheckReview} style={{ padding: '10px 20px' }}>
        Check Review
      </button>

      {result && (
        <div style={{ marginTop: '20px', fontWeight: 'bold' }}>
          Result: {result}
        </div>
      )}
    </div>
  );
}
