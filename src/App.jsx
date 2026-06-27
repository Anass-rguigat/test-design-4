import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import InvestmentJourneyPage from './pages/InvestmentJourney/InvestmentJourneyPage';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<InvestmentJourneyPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </BrowserRouter>
);

export default App;
