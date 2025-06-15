// pages/index.js
import { useState } from 'react';

export default function Home() {
  const [review, setReview] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCheck = async () => {
    setLoading(true);
    setResult('');
    try {
      const response = await fetch('/api/detect', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ review }),
      });

      const data = await response.json();
      setResult(data.result);
    } catch (error) {
      setResult('Error occurred.');
    }
    setLoading(false);
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: 'auto' }}>
      <h1>AI Fake Product Review Detector</h1>
      <textarea
        placeholder="Paste a product review here..."
        value={review}
        onChange={(e) => setReview(e.target.value)}
        rows={6}
        style={{ width: '100%', marginBottom: '1rem' }}
      />
      <button onClick={handleCheck} disabled={loading}>
        {loading ? 'Analyzing...' : 'Check Review'}
      </button>
      {result && (
        <div style={{ marginTop: '1rem', backgroundColor: '#f0f0f0', padding: '1rem' }}>
          <strong>Result:</strong> {result}
        </div>
      )}
    </div>
  );
}
