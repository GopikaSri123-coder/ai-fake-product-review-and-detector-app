import React, { useState, useEffect } from 'react';

const FakeReviewChecker = () => {
  const [review, setReview] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCheck = () => {
    setLoading(true);
    setTimeout(() => {
      if (review.toLowerCase().includes('amazing') || review.length < 10) {
        setResult('❌ Fake Review Detected');
      } else {
        setResult('✅ Genuine Review');
      }
      setLoading(false);
    }, 1500);
  };

  useEffect(() => {
    console.log("Component Loaded");
  }, []);

  return (
    <div>
      <h2>Fake Review Checker</h2>
      <textarea
        rows="4"
        cols="50"
        value={review}
        onChange={(e) => setReview(e.target.value)}
        placeholder="Enter your product review"
      />
      <br /><br />
      <button onClick={handleCheck}>Check Review</button>
      <p>{loading ? 'Checking...' : result}</p>
    </div>
  );
};

export default FakeReviewChecker;
