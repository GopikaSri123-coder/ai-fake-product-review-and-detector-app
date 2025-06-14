import FakeReviewChecker from "../components/FakeReviewChecker";
import TipsList from "../components/TipsList";

export default function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h1>AI Fake Product Review Detector</h1>
      <FakeReviewChecker />
      <TipsList />
    </div>
  );
}
